import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function hexToRgb(hex) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

function luminance(r, g, b) {
    const a = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrastRatio(l1, l2) {
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function recommendMode(hex) {
    const [r, g, b] = hexToRgb(hex);
    const colorLum = luminance(r, g, b);
    const whiteLum = luminance(255, 255, 255);
    const blackLum = luminance(0, 0, 0);

    const contrastWithWhite = contrastRatio(colorLum, whiteLum);
    const contrastWithBlack = contrastRatio(colorLum, blackLum);

    return contrastWithWhite > contrastWithBlack ? "Dark" : "Light";
}

function ColorForm({ color }) {
    const [mode, setMode] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const background = mode ? "#262626" : "#FFFFFF";
    const textColor = mode ? "#FFFFFF" : "#262626";

    return (
        <div
            className="card"
            style={{
                background: background,
            }}
        >
            <div className="card-test">
                <div className="card-test-header">
                    <h2
                        style={{
                            color: textColor,
                        }}
                    >
                        Mode Checker
                    </h2>
                    <button
                        style={{
                            padding: "10px 15px",
                            background: color,
                            color: background,
                        }}
                        onClick={() => setMode(!mode)}
                    >
                        {mode ? <MdLightMode /> : <MdDarkMode />}
                    </button>
                </div>
                <div className="card-test-form">
                    <div className="card-test-form-container">
                        <div
                            className="content-1"
                            style={{
                                border: `2px solid ${color}`,
                                background: color,
                            }}
                        />
                        <div
                            className="content-2"
                            style={{ border: `2px solid ${color}` }}
                        ></div>
                    </div>

                    <div className="card-test-form-form">
                        <input
                            id="a"
                            name="a"
                            type="text"
                            placeholder="Input sample"
                            className="input"
                            style={{
                                "--placeholder-color": color,
                                border: `2px solid ${color}`,
                                color: color,
                                background: background,
                            }}
                        />
                        <button
                            className="button"
                            style={{
                                padding: "10px 15px",
                                background: color,
                                color: textColor,
                            }}
                        >
                            Button
                        </button>
                    </div>
                    <div
                        className="card-test-form-tab"
                        style={{ background: color }}
                    >
                        {Array.from({ length: 3 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                style={{
                                    color:
                                        activeTab === index
                                            ? textColor
                                            : background,
                                }}
                            >
                                Tab {index + 1}
                            </button>
                        ))}
                    </div>
                    <div
                        className="card-test-form-tabs"
                        style={{ border: `2px solid ${color}` }}
                    >
                        {Array.from({ length: 3 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                style={{
                                    color:
                                        activeTab === index ? color : textColor,
                                }}
                            >
                                Tab {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorForm;
