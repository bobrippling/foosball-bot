import React, { useState } from "react";
import { Bookings } from "./Bookings.jsx";
import { AddBooking } from "./AddBooking.jsx";

export const App = () => {
  return (
    <div className="app">
      <Bookings />
      <AddBooking />
    </div>
  );
};
