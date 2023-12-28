import React from "react";

export const useBookings = () => {
  const [bookings, setBookings] = React.useState();
  const r = React.useRef();

  if (bookings == null && !r.scheduled) {
    setTimeout(
      () => {
        setBookings([
          {
            name: "Rob, Lena & Tawseef vs. javascript",
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
