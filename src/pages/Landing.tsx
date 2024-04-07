// import { Link } from "react-router-dom";

// const Landing = () => {
//     return (
//         <div className='space-y-14 m-14'>
//             <h1 className='text-center text-6xl font-bold space-y-2'>
//                 We Have the Meets 🥩
//             </h1>
//             <br></br>
//             <div className='flex justify-center gap-20 text-2xl font'>
//                 <Link className='rounded bg-slate-300 px-4 py-2' to='/find'>
//                     Find a meet
//                 </Link>
//                 <Link to='/create' className='rounded bg-slate-300 px-4 py-2'>
//                     Create meet
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Landing;


import { Link, useNavigate } from "react-router-dom";
import { SetStateAction, useState } from "react";

const FindMeet = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const handleEnterPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            // Call the function that should be executed when the right arrow is clicked
            // For example, navigating to another route
            // navigate('/some-route');
            console.log("Enter pressed, navigate or perform action here");
        }
    };

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    // Example function for handling the right arrow click (replace with your own)
    const handleRightArrowClick = () => {
        navigate('/ConnectCal');
        console.log("Right arrow clicked, navigate to Connect Cal");
    };

    return (
        <div className="flex flex-col items-center text-center m-9">
            <div className="absolute top-0 left-0 m-5">
                <Link to='/..' className="text-2xl">
                    &#x2190; {/* HTML entity for a left-facing arrow */}
                </Link>
            </div>

            <h1 className="text-5xl font-semibold m-7">
                What's your code?
            </h1>
            <br></br>
            <div className="flex flex-row items-center justify-center space-x-2">
                <input 
                    className="text-center rounded px-2 text-xl outline-none"
                    placeholder="Enter it here"
                    onKeyDown={handleEnterPress}
                    onChange={handleInputChange}
                    value={inputValue}
                />
                {/* Arrow button using ASCII character for simplicity */}
                <button 
                    className="text-2xl"
                    onClick={handleRightArrowClick}
                >
                    &#x2192; {/* This is the HTML entity for a right-facing arrow */}
                </button>
            </div>
        </div>
    );
};

export default FindMeet;
