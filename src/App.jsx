import React from "react";
import { createRoot } from 'react-dom/client';

const App = () => (
  <div className="app">
    Hello
  </div>
);

const root = document.querySelector("#root");
createRoot(root).render(<App />);
