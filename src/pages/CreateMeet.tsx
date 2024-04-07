// imports

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronsUpDown } from "lucide-react";

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
import { DatePicker } from "../components/ui/day-picker";
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
    const [recurring, setRecurring] = useState("recurring");
    const [meetID, setMeetID] = useState("");
    const [fadeIn, setFadeIn] = useState(false);

    const handleSetDates = (dates: Date[] | undefined) => {
        if (!dates) {
            setDates([]);
            return;
        }
        setDates(dates);
    };

    useEffect(() => {
        // Trigger the fade-in effect on component mount
        setFadeIn(true);
    }, []);

    // Styles for the fade-in effect
    const fadeInStyles = {
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
    };

    const [code, setCode] = useState<string>("");

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

        <div className="bg-[#E67555] min-h-screen flex flex-col justify-center items-center">
            <div className='absolute left-0 top-0 m-5'>
                        <Link to='/' className='text-2xl'>
                            &#x2190; {/* HTML entity for a left-facing arrow */}
                        </Link>
                    </div>
            <div style={fadeInStyles} className='bg-white space-y-14 p-10 shadow-lg h-screen mx-9'>
            <h1 className='mb-4 px-5 text-center text-3xl font-semibold'>
                Create a new event
            </h1>
            <form
                onSubmit={handleSubmit}
                className='mx-auto flex flex-col items-center'
            >
                <div className='container flex'>
                    <div className='flex flex-col'>
                        <input
                            type='text'
                            className='border'
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            placeholder='Event Name'
                        />
                        <textarea
                            value={description}
                            className='border p-3 text-sm'
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Event Description'
                        />
                    </div>
                    <div className='mx-4 flex flex-col  gap-8'>
                        <DatePicker dates={dates} setDates={handleSetDates} />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='outline'>
                                    {recurring === "recurring" ? (
                                        <span className='flex items-center gap-2'>
                                            Recurring{" "}
                                            <ChevronsUpDown size={16} />
                                        </span>
                                    ) : (
                                        <span className='flex items-center gap-2'>
                                            One Time{" "}
                                            <ChevronsUpDown size={16} />
                                        </span>
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-56'>
                                <DropdownMenuLabel>
                                    Event Type
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup
                                    value={recurring}
                                    onValueChange={(value) =>
                                        setRecurring(value)
                                    }
                                >
                                    <DropdownMenuRadioItem value='recurring'>
                                        Recurring
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value='oneTime'>
                                        One Time
                                    </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <button
                    type='submit'
                    className='max-w-fit rounded-md border bg-blue-400 px-3 py-1.5 font-semibold text-white'>Create Event</button>
                    <div className='flex justify-between gap-48'>
                        
                    </div>
                    
                    
                </form>
        
            </div>
        </div>

    );
};

export default CreateMeet;

