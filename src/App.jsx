import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"; // Make sure Footer is imported

const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
