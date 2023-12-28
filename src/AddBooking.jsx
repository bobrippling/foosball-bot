import React from "react";

import { addBooking } from "./bookings";

export const AddBooking = () => {
  const timeElement = React.useRef();
  const nameElement = React.useRef();

  const onClick = () => {
    const name = nameElement.current.value.trim();
    if(name.length === 0){
      alert("No name given for game");
      return;
    }

    const start = timeElement.current.valueAsDate;
    if(!start){
      alert("No start time given for game");
      return;
    }

    addBooking({ name, start });
  };

  return (
    <div>
      <input type="time" ref={timeElement} test-id="addbooking-time"></input>
      <input type="text" ref={nameElement} test-id="addbooking-name"></input>
      <button onClick={onClick} test-id="addbooking-create">Create booking</button>
    </div>
  )
};
