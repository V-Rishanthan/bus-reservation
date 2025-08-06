import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./Pages/Search.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import SeatSelection from "./Pages/SeatSelection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the layout with Navigation
    children: [
      {
        index: true, // "/"
        element: <Home />,
      },
      {
        path: "search", // "/search"
        element: <Search />,
      },
      {
        path: "seatSelection", // "/SeatSelection"
        element: <SeatSelection />,
      },
      {
        path: "about", // "/about"
        element: <About />,
      },
      {
        path: "contact", // "/contact"
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
