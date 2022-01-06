import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  About,
  CompanyHistory,
  Contact,
  Event,
  Home,
  Location,
  Services,
  Whoops404,
} from "./Pages";
import App1 from "./App1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning" element={<App1 />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
