import { useEffect, useState } from "react";

type Day = {
    date: string;
    id: number;
    meetId: string;
    times: { name: string; start: string; end: string }[];
};
type AvailabilityProps = {
    days: Day[];
};

const Availability = ({ days }: AvailabilityProps) => {
    const [start, setStart] = useState<number[] | null>(null);

    const [selected, setSelected] = useState<boolean[][]>([]);
    useEffect(() => {
        const array = Array.from({ length: days.length }, () =>
            Array.from({ length: 24 }, () => false),
        );
        console.log(array);
        setSelected(array);
    }, [days.length]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        const [col, row] = e.currentTarget.id.split("-").map(Number);
        setStart([col, row]);
    };
    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        const [col, row] = e.currentTarget.id.split("-").map(Number);
        handleSelect(start, [col, row]);
    };
    const handleSelect = (start: number[] | null, end: number[]) => {
        if (!start || !end) return;
        const topLeft = [
            Math.min(start[0], end[0]),
            Math.min(start[1], end[1]),
        ];

        const width = Math.abs(start[0] - end[0]);
        const height = Math.abs(start[1] - end[1]);

        for (let i = topLeft[0]; i < topLeft[0] + width; i++) {
            for (let j = topLeft[1]; j < topLeft[1] + height; j++) {
                setSelected((selected) => {
                    const newSelected = [...selected];
                    newSelected[i][j] = !newSelected[i][j];
                    console.log("Change");
                    return newSelected;
                });
            }
        }
    };
    if (selected.length < 1) return null;

    return (
        <div className='h-80 grow border'>
            <h3>Availablity</h3>
            <hr></hr>
            <div className='flex h-full w-full'>
                {days.map((day, col) => (
                    <div
                        key={day.id}
                        className='flex flex-col border'
                        style={{ width: `calc(100% / ${days.length})` }}
                    >
                        {Array.from({ length: 24 }).map((_, row) => {
                            if (selected[col][row]) {
                                return (
                                    <div
                                        key={row}
                                        id={`${col}-${row}`}
                                        className='w-full grow border-t'
                                        style={{
                                            height: `calc((100% / 24))`,
                                        }}
                                        onMouseDown={handleDragStart}
                                        onMouseUp={handleDragEnd}
                                    />
                                );
                            } else {
                                return (
                                    <div
                                        key={row}
                                        id={`${col}-${row}`}
                                        className='w-full grow border-t bg-green-500'
                                        style={{
                                            height: `calc((100% / 24))`,
                                        }}
                                        onMouseDown={handleDragStart}
                                        onMouseUp={handleDragEnd}
                                    />
                                );
                            }
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Availability;
