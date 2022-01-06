import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

// function AppTwo(){
//   return <h1>App Two</h1>
// }

// <React.Fragment></React.Fragment> - Instead of using React.Fragment we can just use the empty angle

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(
//   document.createElement("h1", { style: { color: "blue" } }, "Hett Everyone"),
//   document.getElementById("test")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
