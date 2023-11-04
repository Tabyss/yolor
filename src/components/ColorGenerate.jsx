import React, { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { ReactComponent as Yolo } from "../assets/yolo-sign.svg";
import { ReactComponent as Asset5 } from "../assets/Asset-5.svg";
import HexConvert from "../control/Converter";
import HexPicker from "../control/Picker";

function ColorGenerate() {
  const [active, setActive] = useState(false);
  const [hex, setHex] = useState(HexPicker);
  const [result, setResult] = useState("");
  const [bw, setBw] = useState(false);
  const [diff, setDiff] = useState("");

  function differentColor() {
    let take = HexConvert(hex, "hsl");
    let split = take.split(", ");
    let hues =
      Number(split[0]) + 180 < 360
        ? Number(split[0]) + 180
        : Number(split[0]) - 180;
    let satur = split[1];
    let lumin = split[2];
    return hues.toString() + ", " + satur + "%" + ", " + lumin + "%";
  }

  function counterColor() {
    let take = HexConvert(hex, "hsl");
    let split = take.split(", ");
    let lumi = split[2] > 55 ? setBw(true) : setBw(false);
    return lumi;
  }

  function handleValue() {
    setHex(HexPicker);
    setActive(false);
    document.getElementById("form").value = "hex";
  }

  function changeFormat() {
    setActive(true);
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

  useEffect(() => {
    differentColor();
    counterColor();
  }, [hex]);

  return (
    <>
      <div
        className="content"
        style={{
          backgroundColor: hex,
        }}
      >
        <div className="content-title">
          <div className="content-title-main">
            <h1 style={{ color: `${bw ? "black" : "white"}` }}>Pick Your</h1>
            <div className="content-title-main-1">
              <Yolo fill={`hsl(${differentColor()})`} className="yolo" />
              <div>
                <h1
                  style={{ color: `hsl(${differentColor()})` }}
                  className="yolor"
                >
                  Yolor
                </h1>
                <Asset5 fill={`hsl(${differentColor()})`} />
              </div>
              <h1 style={{ color: `${bw ? "black" : "white"}` }}>Day!</h1>
            </div>
          </div>
        </div>
        <div className="content-value">
          <div className="content-value-nav">
            <p style={{ color: `${bw ? "black" : "white"}` }}>About</p>
          </div>
          <div className="content-value-form">
            <select className="form-select" id="form" onChange={changeFormat}>
              <option value="hex">hex</option>
              <option value="rgb">rgb</option>
              <option value="hsl">hsl</option>
            </select>
            <span></span>
            <p id="hexel" onChange={handleValue} value={result}>
              {active ? result : hex}
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
