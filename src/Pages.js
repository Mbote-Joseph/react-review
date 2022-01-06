import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "./App.css";
import errorImage from "./404.png";

export function Home() {
  return (
    <div>
      <h1>Company Website</h1>
      <Link to="">
        <button> Home</button>
      </Link>
      <Link to="about">
        <button> About</button>
      </Link>
      <Link to="events">
        <button>Events</button>
      </Link>
      <Link to="contact">
        <button>Contact</button>
      </Link>
      <Link to="learning">
        <button>App Learning</button>
      </Link>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="../">
        <button> Home</button>
      </Link>
      <Link to="">
        <button> About</button>
      </Link>
      <Link to="../events">
        <button>Events</button>
      </Link>
      <Link to="../contact">
        <button>Contact</button>
      </Link>
      <Link to="../learning">
        <button>App Learning</button>
      </Link>

      <hr />

      <Link to="services">
        <button>Services</button>
      </Link>
      <Link to="history">
        <button>Company History</button>
      </Link>
      <Link to="location">
        <button>Our Location</button>
      </Link>
      <hr />
      <Outlet />
    </div>
  );
}

export function Event() {
  return (
    <div>
      <h1>Company's Events</h1>
      <Link to="../">
        <button> Home</button>
      </Link>
      <Link to="../about">
        <button> About</button>
      </Link>
      <Link to="">
        <button>Events</button>
      </Link>
      <Link to="../contact">
        <button>Contact</button>
      </Link>
      <Link to="../learning">
        <button>App Learning</button>
      </Link>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link to="../">
        <button> Home</button>
      </Link>
      <Link to="../about">
        <button> About</button>
      </Link>
      <Link to="../events">
        <button>Events</button>
      </Link>
      <Link to="">
        <button>Contact</button>
      </Link>
      <Link to="../learning">
        <button>App Learning</button>
      </Link>
    </div>
  );
}

export function Whoops404() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found !</h1>
      <h3>{location.pathname}</h3>

      <img src={errorImage} alt="Error notice" />
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h1>Our Services</h1>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div>
      <h1>Our Company History</h1>
    </div>
  );
}

export function Location() {
  return (
    <div>
      <h1>Our Location</h1>
    </div>
  );
}
