
import React, {createContext, useState,  useContext} from 'react';
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
import { Link } from "react-router-dom";


const FindMeet = () => {




    const [confirmation, setConfirmation] = useState(false);


    const handleSubmit = () => {
        setConfirmation(true);
    }




    return (
        <div className="flex flex-col items-center text-center m-9">
            <div>
                
            </div>
            <div>
                <div className="absolute top-0 left-0 m-5">
                    <Link to='/landing' className="text-2xl">
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
                    <button className="text-2xl" onClick={handleSubmit}>
                    &#x2192;{/* Arrow button using ASCII character for simplicity */}
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
                                {`http://localhost:3000/meet/${meetID}`}
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
    );
};




export default FindMeet;


