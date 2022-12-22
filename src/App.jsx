import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import "./App.css";
import HexConvert from "./control/Converter";
import HexPicker from "./control/Picker";

function App() {
  const [hex, setHex] = useState("#c0deff");
  const [result, setResult] = useState()

  function handleValue(e) {
    e.preventDefault();
    setHex(HexPicker);
  }
  function convertColor() {
    let get = document.getElementById("form").value;
    let result = HexConvert(hex, get)
    setResult(result)
  }

  function handleChange() {
    console.log(HexConvert(hex, "hsl"));
  }

  function copyText() {
    const copy = document.getElementById("hexel").value;
    copy.focus;
    navigator.clipboard.writeText(hex);
    console.log("Copy!");
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
            <select className="app-select" id="form" onChange={convertColor}>
              <option value="hex">hex</option>
              <option value="rgb">rgb</option>
              <option value="hsl">hsl</option>
            </select>
            <p id="hexel" type="text" onChange={handleValue} value={hex}>
              {result}
            </p>
            <button
              onClick={copyText}
              style={{
                backgroundColor: hex,
                boxShadow: hex ? `0px 0px 5px ${hex}` : "none",
                // color:  ? "black" : "white"
              }}
            >
              <FiCopy value={{ style: { verticalAlign: "middle" } }} />
            </button>
          </div>
          <button onClick={handleValue}>Generate</button>
          <button onClick={handleChange}>Gen</button>
          {/* <button onClick={handleChange()}>Gen1</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
