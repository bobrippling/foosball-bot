import React from "react";
import * as Time from "./time"

// stored locally in a hack here until we add a server
let setBookings;
let bookings;

export const addBooking = ({ name, start }) => {
  setBookings([
    ...bookings,
    { name, start },
  ]);
}

export const useBookings = () => {
  const [bookings_, setBookings_] = React.useState();
  const r = React.useRef();

  setBookings = setBookings_;
  bookings = bookings_;

  if (bookings == null && !r.scheduled) {
    setTimeout(
      () => {
        setBookings([
          {
            name: "Rob, Lena & Tawseef vs. javascript",
            start: Time.at(13, 30),
          },
        ]);
      },
      1000,
    );
    r.scheduled = true;
  }

  return {
    isLoading: bookings == null,
    data: bookings,
  };
};
