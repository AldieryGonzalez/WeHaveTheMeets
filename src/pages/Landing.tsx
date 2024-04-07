import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { googleSignIn } from "../utils/supabase";

const Landing = () => {
    const supabase = useSupabaseClient();
    return (
        <div className='mx-auto flex w-full flex-col items-center p-5 text-center'>
            <div className='lg:text- my-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl'>
                Sign in to access this site
            </div>
            <p className='mb-6 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400'>
                You must be an employee of the Northwestern Concert Management
                Office at Bienen to gain access
            </p>
            <AddToCalendarButton
                name='Title'
                options={[
                    "Apple",
                    "Google",
                    "Microsoft365",
                    "Outlook.com",
                    "Yahoo",
                ]}
                location=''
                startDate='2024-04-07'
                endDate='2024-04-07'
                startTime='10:16'
                endTime='23:30'
                timeZone='America/Los_Angeles'
            />
            <button
                className='mx-auto rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100'
                onClick={() => googleSignIn(supabase)}
            >
                Sign in with Google
            </button>
        </div>
    );
};

export default Landing;
