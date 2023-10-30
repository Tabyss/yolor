import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { ReactComponent as Yolo } from "../assets/yolo-sign.svg";
import { ReactComponent as Asset5 } from "../assets/Asset-5.svg";
import HexConvert from "../control/Converter";
import HexPicker from "../control/Picker";

function ColorGenerate() {
  const [active, setActive] = useState(false);

  const pop = () => setActive(!active);

  const [hex, setHex] = useState(HexPicker);
  const [result, setResult] = useState("");

  function handleValue() {
    setHex(HexPicker);
    setActive(true);
    document.getElementById("form").value = "hex";
  }

  function changeFormat() {
    let get = document.getElementById("form").value;
    let end = HexConvert(hex, get);

    setResult(end);
  }

  function copyText() {
    const copy = document.getElementById("hexel").innerHTML;
    copy.focus;
    // copy.select();
    navigator.clipboard.writeText(copy);
    // copy.innerText = "Copied";
  }

  return (
    <>
      <div
        className="content"
        style={{
          backgroundColor: hex,
          // color:  ? "black" : "white"
        }}
      >
        <div className="content-title">
          <div className="content-title-main">
            <h1>Pick Your</h1>
            <div className="content-title-main-1">
              <Yolo fill={hex} className="yolo" />
              <div>
                <h1 className="yolor">Yolor</h1>
                <Asset5 fill={hex} />
              </div>
              <h1>Day!</h1>
            </div>
          </div>
          {/* <div className="content-card">
                  <span
                    className="content-card-color"
                    style={{
                      backgroundColor: hex,
                      // color:  ? "black" : "white"
                    }}
                  ></span>
                  <h1>YOLOR</h1>
                  <p>{hex}</p>
                </div> */}
        </div>
        <div className="content-value">
          <div className="content-value-nav">
            <p>About</p>
          </div>
          <div className="content-value-form">
            <select className="form-select" id="form" onChange={changeFormat}>
              <option value="hex">hex</option>
              <option value="rgb">rgb</option>
              <option value="hsl">hsl</option>
            </select>
            <span></span>
            <p id="hexel" onChange={handleValue} value={hex}>
              {active ? hex : "Start!"}
            </p>
            <button className="copy" onClick={copyText}>
              <FiCopy style={{ verticalAlign: "middle" }} />
            </button>
            <button className="generate" onClick={handleValue}>
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorGenerate;
