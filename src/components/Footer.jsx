import React, { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

function Footer() {
    const [active, setActive] = useState(false);
    return (
        <div className="app-footer-main" onClick={() => setActive(!active)}>
            <p>{active ? "Close Palette" : "Check Palette"}</p>
            {active ? <MdOutlineKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </div>
    );
}

export default Footer;
