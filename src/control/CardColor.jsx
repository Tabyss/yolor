import React from "react";

function CardColor(color) {
  return (
    <div>
      <div>
        <span
          style={{
            backgroundColor: color,
            // color:  ? "black" : "white"
          }}
        ></span>
        <h4>{color}</h4>
      </div>
    </div>
  );
}

export default CardColor;
