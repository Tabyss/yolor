import React, { useState } from "react";
import { LuCopy } from "react-icons/lu";

function ColorCard({ color, bw }) {
  const [active, setActive] = useState(false)
  return (
    <div className="card">
      <div style={{ backgroundColor: `${color}` }} className="card-field">
        <div style={{ backgroundColor: `${bw ? "black" : "white"}` }} className="card-field-button">
          <LuCopy style={{ color : `${color}` }}/>
        </div>
      </div>
      <p className="card-field-1">{color}</p>
    </div>
  );
}

export default ColorCard;
