import { AddToCalendarButton } from "add-to-calendar-button-react";

function App() {
    return (
        <AddToCalendarButton
            name='Title'
            options={[
                "Apple",
                "Google",
                "Microsoft365",
                "Outlook.com",
                "Yahoo",
            ]}
            location=''
            startDate='2024-04-07'
            endDate='2024-04-07'
            startTime='10:15'
            endTime='23:30'
            timeZone='America/Los_Angeles'
        ></AddToCalendarButton>
    );
}

export default App;
