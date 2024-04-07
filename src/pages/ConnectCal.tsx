import { Link } from "react-router-dom";

const Connect = () => {
  return (
    
    <div>
        <div className="absolute top-0 left-0 m-5">
                <Link to='/find' className="text-2xl">
                    &#x2190; {/* HTML entity for a left-facing arrow */}
                </Link>
            </div>
      <h1 className="flex flex-col items-center text-5xl font-semibold m-7">
        Connect to your calendar
      </h1>

      <div className='flex justify-center items-center gap-10 text-lg'>
        <Link className='rounded bg-slate-300 px-4 py-2 flex items-center' to='/find'>
          <img src="/../public/google-calendar-logo.png" alt="Google Calendar" width="20px" className="mr-2" />
          GCal
        </Link>
        <Link to='/create' className='rounded bg-slate-300 px-2 py-2 flex items-center'>
          <img src="/../public/ical-logo.png" alt="iCal" width="20px" className="mr-2" />
          iCal
        </Link>
      </div>
    </div>
  );
};

export default Connect;
