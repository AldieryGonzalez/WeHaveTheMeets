import { Link } from "react-router-dom";

const Connect = () => {
    return (
        <div>
            <h1 className='m-7 flex flex-col items-center text-5xl font-semibold'>
                Connect to your calendar
            </h1>

            <div className='flex items-center justify-center gap-10 text-lg'>
                <Link
                    className='flex items-center rounded bg-slate-300 px-4 py-2'
                    to='/find'
                >
                    <img
                        src='/../public/google-calendar-logo.png'
                        alt='Google Calendar'
                        width='20px'
                        className='mr-2'
                    />
                    GCal
                </Link>
                <Link
                    to='/create'
                    className='flex items-center rounded bg-slate-300 px-2 py-2'
                >
                    <img
                        src='/../public/ical-logo.png'
                        alt='iCal'
                        width='20px'
                        className='mr-2'
                    />
                    iCal
                </Link>
            </div>
        </div>
    );
};

export default Connect;
