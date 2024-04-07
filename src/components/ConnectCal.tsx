import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { appleSignIn, azureSignIn, googleSignIn } from "@/utils/supabase";

type ConnectCalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

const ConnectCal = ({ open, setOpen }: ConnectCalProps) => {
    return (
        <AlertDialog defaultOpen open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Connect to your calendar to autofill availability
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-10 text-lg'>
                                <Button
                                    className='flex items-center justify-center rounded bg-slate-300 px-4 py-2 text-lg font-normal text-gray-500'
                                    onClick={googleSignIn}
                                >
                                    <img
                                        src='/../public/google-calendar-logo.png'
                                        alt='Google Calendar'
                                        width='20px'
                                        className='mr-2'
                                    />
                                    GCal
                                </Button>
                                <Button
                                    className='flex items-center justify-center rounded bg-slate-300 px-4 py-2 text-lg font-normal text-gray-500'
                                    onClick={appleSignIn}
                                >
                                    <img
                                        src='/../public/google-calendar-logo.png'
                                        alt='Google Calendar'
                                        width='20px'
                                        className='mr-2'
                                    />
                                    Apple
                                </Button>
                                <Button
                                    className='flex items-center justify-center rounded bg-slate-300 px-4 py-2 text-lg font-normal text-gray-500'
                                    onClick={azureSignIn}
                                >
                                    <img
                                        src='/../public/google-calendar-logo.png'
                                        alt='Google Calendar'
                                        width='20px'
                                        className='mr-2'
                                    />
                                    Azure
                                </Button>
                            </div>
                            <Button
                                variant={"ghost"}
                                className='underline'
                                onClick={() => setOpen(!open)}
                            >
                                No thanks, I'll enter my availability manually
                            </Button>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ConnectCal;
