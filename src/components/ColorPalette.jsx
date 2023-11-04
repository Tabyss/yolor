import React, { useState } from "react";
import Footer from "./Footer";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import CardColor from "../control/CardColor";

function ColorPalette() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div>
        {/* <CardColor color={color}/> */}
      </div>
      <div className="footer">
        <div className="footer-main" onClick={() => setActive(!active)}>
          <p>{active ? "Close Palette" : "Check Palette"}</p>
          {active ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
        </div>
      </div>
    </>
  );
}

export default ColorPalette;
