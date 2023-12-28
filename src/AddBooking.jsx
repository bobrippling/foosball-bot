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
      <input type="time" ref={timeElement}></input>
      <input type="text" ref={nameElement}></input>
      <button onClick={onClick}>Create booking</button>
    </div>
  )
};
