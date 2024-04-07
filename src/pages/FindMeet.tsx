import { Link } from "react-router-dom";

const FindMeet = () => {

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
            <div className="flex flex-row items-center justify-center space-x-2">
                <input 
                    className="text-center rounded px-2 text-lg outline-none"
                    placeholder="Enter it here"
                />
                {/* Arrow button using ASCII character for simplicity */}
                <button className="text-2xl">
                    &#x2192; {/* This is the HTML entity for a right-facing arrow */}
                </button>
            </div>
        </div>
    );
};

export default FindMeet;


