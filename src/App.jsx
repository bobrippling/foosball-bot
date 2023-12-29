import React, { useState } from "react";
import { Items } from "./Items.jsx";
import { Timetable } from "./Timetable.jsx";
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <h1 className="header">Social Hub Operator</h1>
      <div className="container">
        <div className="items section">
          <Items />
        </div>
        <div className="timeslots section">
          <Timetable />
        </div>
      </div>
    </div>
  );
};
