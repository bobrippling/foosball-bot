import React, { useState } from "react";
import { Items } from "./Items.jsx";
import { Timetable } from "./Timetable.jsx";
import { Bookings } from "./Bookings.jsx";
import { AddBooking } from "./AddBooking.jsx";
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <h1>Social Hub Operator</h1>
      <div class="container">
        <div class="Items">
          <Items />
        </div>
        <div class="Timeslots">
          <AddBooking />
          <Bookings />
          <Timetable />
        </div>
      </div>
    </div>
  );
};
