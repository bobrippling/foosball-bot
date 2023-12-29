import React from "react";
import { createPortal } from 'react-dom';
import { useQueryClient, useMutation } from "react-query";

import { onAddBooking, findOverlap, useBookings } from "./bookings";
import { Time } from "./time"

export const AddBooking = () => {
  const enabled = !useBookings().isLoading;
  const [dialogShown, setDialogShown] = React.useState(false);
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
    const userDate = timeElement.current.value;
    if(!userDate){
      alert("No start time given for game");
      return;
    }

    setDialogShown(true);
  };

  const onDialogClick = () => {
    const name = nameElement.current.value.trim();
    if(name.length === 0){
      alert("No name given for game");
      return;
    }

    const userDate = timeElement.current.value;
    const [h, m] = userDate.split(":");
    const time = Time.at(Number(h), Number(m));

    const overlap = findOverlap(queryClient, time);
    if (overlap) {
      alert(`Game overlaps with ${overlap.name}`);
      return;
    }

    addBooking.mutate({ name, time });
    setDialogShown(false);
  };

  return (
    <div>
      <input disabled={!enabled} type="time" ref={timeElement} test-id="addbooking-time"></input>
      <button disabled={!enabled} onClick={onClick} test-id="addbooking-create">Create booking</button>
      <Dialog shown={dialogShown}>
        <p>
          What would you like to call your game at {timeElement?.current?.value}?
        </p>
        <input type="text" ref={nameElement} test-id="addbooking-name"></input>
        <button onClick={onDialogClick} test-id="addbooking-complete">Confirm</button>
      </Dialog>
    </div>
  )
};

const Dialog = ({ shown, children }) => {
  const portalContent = (
    <div className="modal-content">
      {children}
    </div>
  );

  const modalEl = document.querySelector("#modal");

  React.useEffect(() => {
    modalEl.classList.toggle("modal-visible", shown);
  }, [shown, modalEl]);

  return shown
    ? createPortal(portalContent, modalEl)
    : null;
};
