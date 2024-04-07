import { Link } from "react-router-dom";


const Connect = () => {

        return (
            <div>
                <h1 className="flex flex-col items-center text-5xl font-semibold m-7">Connect to your calendar</h1>

                <div className='flex justify-center gap-10 text-lg'>
                    <Link className='rounded bg-slate-300 px-4 py-2' to='/find'>
                        <img src="google-calendar-logo.png" alt="Google Calendar" className="mr-2" />
                        Google Calendar
                    </Link>
                    <Link to='/create' className='rounded bg-slate-300 px-2 py-2'>
                        <img src="ical-logo.png" alt="iCal" className="mr-2" />
                        iCal
                    </Link>
                </div>
            </div>
        );
};


export default Connect;