import React, { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

function Footer() {
  const [active, setActive] = useState(false);
  return (
    <div className="footer">
      <div className="footer-main" onClick={() => setActive(!active)}>
        <p>{active ? "Close Palette" : "Check Palette"}</p>
        {active ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </div>
    </div>
  );
}

export default Footer;
