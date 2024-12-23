import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [name, setName] = useState("something");

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="btn">
        <h2>Name: {name}</h2>
        <button onClick={() => setName("game te")}>Change Name</button>
      </div>
      <br />
      <br />

      <div className="count">
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <button onClick={() => setCount(0)}> reset </button>
      </div>
    </div>
  );
}

export default Counter;
