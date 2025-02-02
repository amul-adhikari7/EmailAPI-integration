import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ContentImage from "./components/ContentImage";
import About from "./components/About";
import Contact from "./components/Contact";
import VideoGallery from "./components/Gallery";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ContentImage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<VideoGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
