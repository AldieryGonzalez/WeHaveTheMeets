import Availability from "@/components/Availability";
import ConnectCal from "@/components/ConnectCal";
import { supabase } from "@/utils/supabase";
import { useAuth } from "@/utils/useAuth";
// import { type Session } from "@supabase/supabase-js";
// import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Day = {
    date: string;
    id: number;
    meetId: string;
    times: { name: string; start: string; end: string }[];
};

const Meet = () => {
    const { session } = useAuth();
    const provider = session?.user.app_metadata.provider || "";
    const [open, setOpen] = useState(provider != "");
    const [name, setName] = useState("");
    const [days, setDays] = useState<Day[]>([]);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            navigate("/");
            return;
        }
        // const unpackedID = atob(id);
        // console.log(unpackedID);
        // const fetchCalendar = async (
        //     session: Session | null,
        //     startTime = new Date().toISOString(),
        // ) => {
        //     const url = `https://www.googleapis.com/calendar/v3/freeBusy?timeMin=${startTime}`;
        //     const response = await axios.get(url, {
        //         headers: {
        //             Authorization: `Bearer ${session?.provider_token}`,
        //         },
        //     });
        //     console.log(response.data);
        // };
        const getMeet = async () => {
            // const availability = await fetchCalendar(session);
            // console.log(availability);
            const res = await supabase
                .from("days")
                .select()
                .eq("meetId", "8919e838-4447-4ddf-a47e-5c807f9ce962");
            setDays(res.data || []);
            return res;
        };

        getMeet();
    }, [id, navigate, session]);

    return (
        <div className='m-8 flex flex-col gap-4'>
            <h1 className='text-center text-4xl font-bold'>Meet Details</h1>
            <div className='space-x-2'>
                <label>Meet Name: </label>
                <input
                    type='text'
                    placeholder='Meet Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='rounded-md border px-2 py-1'
                />
            </div>
            <div className='flex gap-10'>
                <Availability days={days} />
                <div className='hidden flex-col justify-around md:flex'>
                    <div>
                        <h3>Available</h3>
                        <hr></hr>
                        <ul>
                            <li>Rachel Longbourne</li>
                            <li>Rachel Longbourne</li>
                            <li>Rachel Longbourne</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Not Available</h3>
                        <hr></hr>
                        <ul>
                            <li>Rachel Longbourne</li>
                            <li>Rachel Longbourne</li>
                            <li>Rachel Longbourne</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ConnectCal open={open} setOpen={setOpen} />
        </div>
    );
};

export default Meet;
