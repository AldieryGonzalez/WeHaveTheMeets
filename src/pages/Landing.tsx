import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className='space-y-14 m-14'>
            <h1 className='text-center text-6xl font-bold space-y-2'>
                We Have the Meets 🥩
            </h1>
            <br></br>
            <div className='flex justify-center gap-20 text-2xl font'>
                <Link className='rounded bg-slate-300 px-4 py-2' to='/find'>
                    Find a meet
                </Link>
                <Link to='/create' className='rounded bg-slate-300 px-4 py-2'>
                    Create meet
                </Link>
            </div>
        </div>
    );
};

export default Landing;
