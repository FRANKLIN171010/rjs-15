import React from "react";
import useToggle from "./useToggle";
import "./index.css";

function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div className="container">
      <h1>Custom Toggle Hook</h1>

      <div className="card">
        <h2>Status: {isOn ? "ON" : "OFF"}</h2>
        <button onClick={toggle}>Toggle</button>
      </div>
    </div>
  );
}

export default App;
