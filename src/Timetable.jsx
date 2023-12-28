import { LoadingSpinner } from "./LoadingSpinner.jsx";
import { useBookings } from "./bookings";
import { Time } from "./time"

export const Timetable = () => {
    const { isLoading, data: bookings } = useBookings();

    const times = [];
    for(let hr = 8; hr < 22; hr++){
        times.push(`${hr}:00`);
        times.push(`${hr}:30`);
    }

    const bookingTitle = time => {
        if(isLoading) return null;

        time = Time.from(time);

        for(const booking of bookings)
            if(time.overlaps(booking.time))
                return booking.name;

        return null;
    };

    const Timeslots = () => (
        times.map((time, i) => {
            const title = bookingTitle(time);

            return title ? (
                <div key={i}>
                    <button type="button">{time}</button>
                    {" "}
                    <span>{title}</span>
                </div>
            ) : (
                <button type="button" key={i}>{time}</button>
            )
        })
    );

    return (
        <>
            <h3 className="title">Timeslots</h3>
            <div className="booking">
            {isLoading ? <LoadingSpinner /> : <Timeslots />}
            </div>
        </>
    )
}
