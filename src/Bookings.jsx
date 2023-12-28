import React from "react";
import { useBookings } from "./bookings";
import { LoadingSpinner } from "./LoadingSpinner.jsx";

export const Bookings = () => {
  const { isLoading, data: bookings } = useBookings();

  return (
    <div>
      {isLoading ? (
          <LoadingSpinner />
      ) : (
        <ul>
          {bookings.map((game, i) => <Booking game={game} key={i} />)}
        </ul>
      )}
    </div>
  );
}

const Booking = ({ game }) => (
  <li>
    {game.name}
  </li>
)
