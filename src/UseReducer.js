import React, {
  // useState,
  useReducer,
} from "react";

function UseReducer() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  console.log(checked);

  //   Reducer come to help avoid this function and it just change the initial state of the variable to another. It takes the current state and returns the new state
  //   function toggle() {
  //     setChecked((checked) => !checked);
  //   }
  return (
    <div>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}

export default UseReducer;
