import React from "react";

function Destructure(props) {
  return (
    <div>
      <h1>Destructure functional component</h1>
      <ul>
        {props.companies.map((company, i) => (
          <li key={i}>{company}</li>
        ))}
      </ul>
    </div>
  );
}

export default Destructure;
