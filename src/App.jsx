import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Bookings } from "./Bookings.jsx";

const App = () => {
  return (
    <div className="app">
      <Bookings />
    </div>
  );
};

ReactDOM
  .createRoot(document.querySelector("#root"))
  .render(<App />);
