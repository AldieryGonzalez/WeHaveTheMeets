import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../components/ui/alert-dialog";


const FindMeet = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the fade-in effect on component mount
        setFadeIn(true);
    }, []);

    // Styles for the fade-in effect
    const fadeInStyles = {
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
    };

    const [confirmation, setConfirmation] = useState(false);
    const [code, setCode] = useState<string>("");
    // const [meetID, setMeetID] = useState("");

    const handleSubmit = () => {
        setConfirmation(true);
    };

    return (
        <div className="bg-[#E67555] min-h-screen flex justify-center items-center">
        {/* <div className="bg-[#E67555] min-h-screen flex justify-center items-center"> */}
            {/* Centered container with white background */}
            <div className='absolute left-0 top-0 m-5'>
                        <Link to='/' className='text-2xl'>
                            &#x2190; {/* HTML entity for a left-facing arrow */}
                        </Link>
                    </div>
            <div style={fadeInStyles} className='bg-white space-y-14 p-10 shadow-lg h-screen mx-9'>
            <div className='m-9 flex flex-col items-center text-center'>
                
                <div>
                    

                    <h1 className='m-7 text-5xl font-semibold'>
                        What's your code?
                    </h1>
                    <div className='flex flex-row items-center justify-center space-x-2'>
                        <input
                            className='rounded px-2 text-center text-lg outline-none'
                            placeholder='Enter it here'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        {/* Arrow button using ASCII character for simplicity */}
                        <button className='text-2xl' onClick={handleSubmit}>
                            &#x2192;
                            {/* Arrow button using ASCII character for simplicity */}
                        </button>
                    </div>

                </div>
                <AlertDialog open={confirmation} onOpenChange={setConfirmation}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Meet Created!</AlertDialogTitle>
                            <AlertDialogDescription className='w-96'>
                                <div className='w-full break-words'>
                                    Link is at{" "}
                                    {`http://localhost:3000/meet/${code}`}
                                </div>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>

        </div>
        </div>

    );
};

export default FindMeet;
