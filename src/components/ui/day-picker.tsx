import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type DatePickerDemoProps = {
    dates: Date[] | null | undefined;
    setDates: React.Dispatch<React.SetStateAction<Date[]>>;
};

export function DatePickerDemo({ dates, setDates }: DatePickerDemoProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !dates && "text-muted-foreground",
                    )}
                >
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {dates && dates.length > 0 ? (
                        format(dates[0], "PPP")
                    ) : (
                        <span>Pick some dates</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
                <Calendar
                    mode='multiple'
                    selected={dates || null}
                    onSelect={setDates}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
