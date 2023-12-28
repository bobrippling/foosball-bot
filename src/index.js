import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import { App } from "./App.jsx";

const queryClient = new QueryClient();

ReactDOM
  .createRoot(document.querySelector("#root"))
  .render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
