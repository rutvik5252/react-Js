import React, { useState } from "react";

export default function Bootstrap(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text.trim() === "") {
      alert("Text area is empty!");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      if (text === newText) {
        alert("Already in UpperCase");
      }
    }
  };
  const handleLcClick = () => {
    if (text.trim() === "") {
      alert("Text area is empty!");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      if (text === newText) {
        alert("Already in LowerCase");
      }
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            value={text}
            className="form-control"
            placeholder="Enter text here"
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLcClick}>
          Convert LowerCase
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={(event) => setText(event.target.value)}
        >
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(" ").length} words and{" "}
          <span style={{ color: "Tomato" }}>
            ({0.008 * text.split("").length} Minutes Read )
          </span>
          {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
