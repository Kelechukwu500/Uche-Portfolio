import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import HireME from "./Buttons/HireME"; // Make sure this path and component name match the file
import LatestProjects from "./Buttons/LatestProjects";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire-me" element={<HireME />} />
        <Route path="/latest-projects" element={<LatestProjects />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
