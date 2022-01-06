import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

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
      <Link to="learning">
        <button>App Learning</button>
      </Link>
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
      <Link to="learning">
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
      <Link to="learning">
        <button>App Learning</button>
      </Link>
    </div>
  );
}
