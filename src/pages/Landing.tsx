//how do i m
import { Link } from "react-router-dom";



const Landing = () => {
    return (
        <div className='space-y-14 m-14'>
            <h1 className='text-center text-6xl font-bold space-y-2'>
                We Have the Meets 🥩
            </h1>
            <div className='flex justify-center gap-10 text-lg'>
                <Link className='rounded bg-slate-300 px-2 py-1' to='/find'>
                    Find a meet
                </Link>
                <Link to='/create' className='rounded bg-slate-300 px-2 py-1'>
                    Create a meet
                </Link>
            </div>
        </div>
    );
};

export default Landing;
