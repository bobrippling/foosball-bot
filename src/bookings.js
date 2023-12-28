import React from "react";
import { useQuery } from "react-query";

import * as Time from "./time"

export const onAddBooking = ({ name, start }) => {
  reservations.push({ name, start });
};

export const findOverlap = (queryClient, start) => {
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + 30);

  const bookings = queryClient.queryCache.queriesMap['["bookings"]'].state.data;

  for (const booking of bookings) {
    const bookingEnd = new Date(booking.start);
    bookingEnd.setMinutes(bookingEnd.getMinutes() + 30);

    if ((start <= booking.start && booking.start < end)
    || (end <= booking.end && booking.end < end))
    {
      return booking;
    }
  }

  return null;
};

export const useBookings = () => {
  return useQuery(
    "bookings",
    async () => {
      if(reservations == null){
        await new Promise(res => setTimeout(res, 1000));

        reservations = [
          {
            name: "Rob, Lena & Tawseef vs. javascript",
            start: Time.at(13, 30),
          }
        ];
      }

      return reservations;

      //fetch(
      //    ...
      //).then((res) => res.json())
    },
  );
};

let reservations;
