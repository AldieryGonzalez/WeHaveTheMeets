import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type DatePickerProps = {
    dates: Date[] | null | undefined;
    setDates: (dates: Date[] | undefined) => void;
};

export function DatePicker({ dates, setDates }: DatePickerProps) {
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
                        <span>
                            {dates.length}{" "}
                            {dates.length === 1 ? "date" : "dates"} selected
                        </span>
                    ) : (
                        <span>Pick some dates</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
                <Calendar
                    mode='multiple'
                    selected={dates || undefined}
                    onSelect={setDates}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
