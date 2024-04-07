import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className='space-y-4'>
            <h1 className='text-center text-4xl font-semibold'>
                We have the MEETS
            </h1>
            <div className='flex justify-center gap-5'>
                <Link className='rounded bg-slate-300 px-2 py-1' to='/find'>
                    Find a meeting
                </Link>
                <Link to='/create' className='rounded bg-slate-300 px-2 py-1'>
                    Create a meeting
                </Link>
            </div>
        </div>
    );
};

export default Landing;
