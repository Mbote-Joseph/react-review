import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About, Contact, Event, Home } from "./Pages";
import App1 from "./App1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning" element={<App1 />} />
      </Routes>
    </div>
  );
}

export default App;
