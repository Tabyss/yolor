import { useEffect, useMemo, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { ReactComponent as Yolo } from "../../assets/yolo-sign.svg";
import { ReactComponent as Asset5 } from "../../assets/Asset-5.svg";
import HexConvert from "../../control/Converter";
import HexPicker from "../../control/Picker";
import AddFeature from "../AddFeature/AddFeature";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./ColorGenerate.scss";
import useToast from "../../hook/useToast";

function ColorGenerate({ pop, setPop }) {
    const [active, setActive] = useState(false);
    const [hex, setHex] = useState(HexPicker);
    const [result, setResult] = useState("");
    const [bw, setBw] = useState(false);
    const showToast = useToast();

    const hsl = useMemo(() => HexConvert(hex, "hsl"), [hex]);
    const hslSplit = useMemo(
        () => hsl.split(", ").map((v) => parseFloat(v)),
        [hsl]
    );

    const complementaryHSL = useMemo(() => {
        const [h, s, l] = hslSplit;
        const newHue = (h + 180) % 360;
        return `${newHue}, ${s}%, ${l}%`;
    }, [hslSplit]);

    useEffect(() => {
        const luminance = hslSplit[2];
        setBw(luminance > 55);
    }, [hslSplit]);

    const handleGenerate = () => {
        setHex(HexPicker);
        setActive(false);
        setPop(false);
        document.getElementById("form").value = "hex";
    };

    const handleFormatChange = () => {
        const format = document.getElementById("form").value;
        const converted = HexConvert(hex, format);
        setResult(converted);
        setActive(true);
    };

    const copyToClipboard = () => {
        const text = document.getElementById("hexel")?.innerText;
        navigator.clipboard.writeText(text);
        showToast(`Copied ${text.toUpperCase()} to clipboard!`);
    };

    const togglePalette = () => {
        setPop(!pop);
    };

    return (
        <>
            <div
                className={`content ${pop ? "rem" : ""}`}
                style={{ backgroundColor: hex }}
            >
                <div className="content-title">
                    <div className="content-title-main">
                        <h1 style={{ color: bw ? "black" : "white" }}>
                            Pick Your
                        </h1>
                        <div className="content-title-main-1">
                            <Yolo
                                fill={`hsl(${complementaryHSL})`}
                                className="yolo"
                            />
                            <div>
                                <h1
                                    className="yolor"
                                    style={{
                                        color: `hsl(${complementaryHSL})`,
                                    }}
                                >
                                    Yolor
                                </h1>
                                <Asset5 fill={`hsl(${complementaryHSL})`} />
                            </div>
                            <h1 style={{ color: bw ? "black" : "white" }}>
                                Day!
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="content-value">
                    <div className="content-value-form">
                        <select
                            className="form-select"
                            id="form"
                            onChange={handleFormatChange}
                        >
                            <option value="hex">hex</option>
                            <option value="rgb">rgb</option>
                            <option value="hsl">hsl</option>
                        </select>

                        <p id="hexel">{active ? result : hex}</p>

                        <button className="copy" onClick={copyToClipboard}>
                            <FiCopy style={{ verticalAlign: "middle" }} />
                        </button>

                        <button className="generate" onClick={handleGenerate}>
                            Generate
                        </button>
                    </div>
                </div>

                <div className="content-foot">
                    <div className="button" onClick={togglePalette}>
                        <p>{pop ? "Close Palette" : "Check Palette"}</p>
                        {pop ? (
                            <MdOutlineKeyboardArrowDown />
                        ) : (
                            <MdKeyboardArrowUp />
                        )}
                    </div>
                </div>
            </div>

            <AddFeature pop={pop} color={hex} bw={bw} />
        </>
    );
}

export default ColorGenerate;
