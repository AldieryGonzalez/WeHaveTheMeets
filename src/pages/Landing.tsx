import { useState } from 'react';
import { To, useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNavigation = (path: To) => {
        setIsAnimating(true); // Begin animation
        // Animate expansion and fade out, then navigate
        setTimeout(() => navigate(path), 1000); // Adjust timing based on your animation
    };

    return (
        <div className={`bg-[#E67555] min-h-screen flex justify-center items-center transition-all duration-1000 ${isAnimating ? 'w-screen h-screen' : ''}`}>
            <div className={`bg-white space-y-14 m-14 p-10 rounded-lg shadow-lg transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <h1 className='text-center text-6xl font-bold space-y-2'>
                    We Have the Meets 🥩
                </h1>
                <div className='text-center flex justify-center gap-11 text-2xl font m-10'>
                    <button className='rounded bg-slate-300 px-5 py-2' onClick={() => handleNavigation('/find')}>
                        Find a meet
                    </button>
                    <button onClick={() => handleNavigation('/create')} className='rounded bg-slate-300 px-5 py-2'>
                        Create meet
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Landing;

