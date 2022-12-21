import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import "./App.css";

function hexPicker() {
  let arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const line1 = [];
  for (let i = 0; i < 6; i++) {
    line1.push(arr[Math.floor(Math.random() * 16)]);
  }
  let queu = "#" + line1.join("");
  return queu;
}

function App() {
  const [hex, setHex] = useState("#c0deff");

  function handleValue(e) {
    e.preventDefault();
    setHex(hexPicker());
  }

  function handleChange() {
    setHex();
  }

  function copyText() {
    const copy = document.getElementById("hexel");
    copy.focus;
    navigator.clipboard.writeText(hex);
    console.log("Copy!")
  }

  return (
    <div className="app">
      <div
        className="app-main"
        style={{
          backgroundColor: hex,
          // color:  ? "black" : "white"
        }}
      >
        <div className="app-title">
          <h1>Pick Your Color Day!</h1>
          <p>About</p>
        </div>
        <div className="app-gene">
          <div className="app-value">
            <p id="hexel" type="text" onChange={handleChange} value={hex} >{hex}</p>
            <button
              onClick={copyText}
              style={{
                backgroundColor: hex,
                boxShadow: hex ? `0px 0px 5px ${hex}` : null ,
                // color:  ? "black" : "white"
              }}
            >
              <FiCopy value={{ style: { verticalAlign: 'middle' } }}/>
            </button>
          </div>
          <button onClick={handleValue}>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
