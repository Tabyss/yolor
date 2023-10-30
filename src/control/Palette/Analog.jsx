import React from "react";

function Analog() {
  let data = [];
  for (let i = -2; data.length <= 4; i++) {
    p = h + 30 * i;
    if (p > 360) {
      p = p - 360;
    } else if (p < 0) {
      p = p + 360;
    }
    merge = [p, s, l];
    data.push(merge);
  }
  return (
    <div>
      {data.map((list, i) => {
        <div key={i}>
            
        </div>;
      })}
    </div>
  );
}

export default Analog;
