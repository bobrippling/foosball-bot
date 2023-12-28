import React from "react";
import { useQuery } from "react-query";

import { Time } from "./time"

export const onAddBooking = ({ name, time }) => {
  reservations.push({ name, time });
};

export const findOverlap = (queryClient, time) => {
  const bookings = queryClient.queryCache.queriesMap['["bookings"]'].state.data;

  for (const booking of bookings)
    if (time.overlaps(booking.time))
      return booking;

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
            time: Time.at(13, 30),
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
