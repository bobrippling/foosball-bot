import React from "react";
import { useQueryClient, useMutation } from "react-query";

import { onAddBooking, findOverlap, useBookings } from "./bookings";
import { Time } from "./time"

export const AddBooking = () => {
  const enabled = !useBookings().isLoading;
  const timeElement = React.useRef();
  const nameElement = React.useRef();
  const queryClient = useQueryClient();
  const addBooking = useMutation(
    async booking => {
      await new Promise(res => setTimeout(res, 500));
      onAddBooking(booking);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      // fetch(
      //   ...
      // ).then((res) => res.json()),
    },
  );

  const onClick = () => {
    const name = nameElement.current.value.trim();
    if(name.length === 0){
      alert("No name given for game");
      return;
    }

    const userDate = timeElement.current.value;
    if(!userDate){
      alert("No start time given for game");
      return;
    }
    const [h, m] = userDate.split(":");
    const time = Time.at(Number(h), Number(m));

    const overlap = findOverlap(queryClient, time);
    if (overlap) {
      alert(`Game overlaps with ${overlap.name}`);
      return;
    }

    addBooking.mutate({ name, time });
  };

  return (
    <div>
      <input disabled={!enabled} type="time" ref={timeElement} test-id="addbooking-time"></input>
      <input disabled={!enabled} type="text" ref={nameElement} test-id="addbooking-name"></input>
      <button disabled={!enabled} onClick={onClick} test-id="addbooking-create">Create booking</button>
    </div>
  )
};