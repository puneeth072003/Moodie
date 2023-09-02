import { Routes, Route } from "react-router-dom";
import React from "react";
import App from "../App/App";
import { About } from "../Pages/About.jsx";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Content;
