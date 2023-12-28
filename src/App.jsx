import React, { useState } from "react";
import { Items } from "./Items.jsx";
import { Timetable } from "./Timetable.jsx";
import { Bookings } from "./Bookings.jsx";
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
          <Bookings />
          <Timetable />
        </div>
      </div>
    </div>
  );
};
