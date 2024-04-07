// imports
import React, { useState } from "react";
import { DatePickerDemo } from "../components/ui/day-picker";

const CreateMeet = () => {
    // state for event name, start time, end time, and description
    // start and end times will be calendar pickers
    // description will be a text area
    // on submit, create a new event in the database

    const [eventName, setEventName] = useState("");
    const [dates, setDates] = useState<Date[]>([]); // [start, end
    const [description, setDescription] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // create event in database
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
                        <DatePickerDemo dates={dates} setDates={setDates} />
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
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateMeet;
