import { calendar as CalendarClient } from "@googleapis/calendar";
import { type Session } from "@supabase/supabase-js";

export const getCalendar = (session: Session | null) => {
    if (!session) {
        console.log("No session found");
        return null;
    }
    const token = session.provider_token;
    const calendar = CalendarClient({
        version: "v3",
        headers: { Authorization: `Bearer ${token}` },
        params: {
            order: "startTime",
        },
    });
    console.log(calendar);
    return calendar;
};
