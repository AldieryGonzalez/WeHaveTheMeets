// imports
import React, { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { DatePickerDemo } from "../components/ui/day-picker";
import { supabase } from "../utils/supabase";

const CreateMeet = () => {
    // state for event name, start time, end time, and description
    // start and end times will be calendar pickers
    // description will be a text area
    // on submit, create a new event in the database

    const [eventName, setEventName] = useState("");
    const [dates, setDates] = useState<Date[]>([]); // [start, end
    const [description, setDescription] = useState("");
    const [confirmation, setConfirmation] = useState(false);
    const [meetID, setMeetID] = useState("");

    const handleDateChange = (newDates: Date[] | undefined) => {
        if (!newDates) return;
        setDates(newDates);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(eventName, dates, description);

        const res = await supabase
            .from("meets")
            .insert({
                name: eventName,
                recurring: false,
                description: description,
            })
            .select();
        if (!res.data) {
            console.error("Error creating event");
            return;
        }

        for (const date of dates) {
            await supabase
                .from("days")
                .insert({
                    meetId: res.data[0].id,
                    date: date,
                    times: [
                        { name: "Aldi", start: new Date(), end: new Date() },
                    ],
                })
                .select();
        }
        const compressedID = res.data[0].id;
        const base64ID = btoa(compressedID);
        setMeetID(base64ID);
        setConfirmation(true);
    };

    return (
        <div className='flex flex-col'>
            <h1 className='px-5 text-center font-bold'>Create a new event</h1>
            <form
                onSubmit={handleSubmit}
                className='m-4 flex flex-col items-center'
            >
                <div className='flex justify-between gap-48'>
                    <label>
                        Event Name:
                        <input
                            type='text'
                            className='border'
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                        />
                    </label>
                    <span>Rec/OneTIme</span>
                </div>
                <div className='mx-4 flex justify-between gap-8'>
                    <label className='flex flex-col'>
                        Dates:
                        <DatePickerDemo
                            dates={dates}
                            setDates={handleDateChange}
                        />
                    </label>

                    <label className='flex grow flex-col'>
                        Description:
                        <textarea
                            value={description}
                            className='border p-3 text-sm'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                </div>
                <button
                    type='submit'
                    className='max-w-fit rounded-md border bg-blue-400 px-3 py-1.5 font-semibold text-white'
                >
                    Create an Event
                </button>
            </form>
            <AlertDialog open={confirmation} onOpenChange={setConfirmation}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Meet Created!</AlertDialogTitle>
                        <AlertDialogDescription className='w-96'>
                            <div className='w-full break-words'>
                                Link is at{" "}
                                {`http://localhost:3000/meet/${meetID}`}
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default CreateMeet;
