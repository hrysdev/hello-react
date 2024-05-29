// src/index.tsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Top from "./pages/Top";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Counter from "./pages/Counter";
import Detail from "./pages/Detail";
import UserProvider from "./providers/UserProvider";
import Pokemon from "./components/Pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
  },
  {
    path: "counter",
    element: <Counter />,
  },
  {
    path: "pages/:id",
    element: <Detail />,
  },
  {
    path: "pokemons/:id",
    element: <Pokemon />,
  },
]);

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </StrictMode>
  );
} else {
  throw new Error();
}
