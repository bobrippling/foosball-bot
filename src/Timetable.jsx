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

    return (
        <>
            <h3 className="title">Timeslots</h3>
            <div>
                {times.map((time, i) => (
                    <div key={i}>
                        <button type="button">{time}</button>
                        {" "}
                        <span>{bookingTitle(time)}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
