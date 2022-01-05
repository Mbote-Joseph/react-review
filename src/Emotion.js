import React, { useState, useEffect } from "react";

function Emotion() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");

  useEffect(() => {
    console.log(`It is ${emotion} around here !`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It is ${secondary} here.`);
  }, [secondary]);
  return (
    <>
      <h2>
        The current emotion is {emotion} and {secondary}
      </h2>

      <button onClick={() => setEmotion("Frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("Enthusiastic")}>Enthuse</button>
      <button onClick={() => setSecondary("Cabby")}>Make Cabby</button>
      <button onClick={() => setEmotion("Happy")}>Normal</button>
    </>
  );
}

export default Emotion;
