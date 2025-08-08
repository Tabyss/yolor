import {
    generateMonochrome,
    generateAnalogous,
    generateTriadic,
    generateSquare,
    generateComplementary,
    generateTetradic,
} from "../../../utils/colorPalette";

import {
    hexToRgb,
    rgbToHsl,
    hslToRgb,
    rgbToHex,
} from "../../../utils/colorConverter";
import { BiCopy } from "react-icons/bi";
import useToast from "../../../hook/useToast";

const paletteGenerators = {
    Monochrome: generateMonochrome,
    Analogous: generateAnalogous,
    Complementary: generateComplementary,
    Triadic: generateTriadic,
    Tetradic: generateTetradic,
    Square: generateSquare,
};

function ColorPalette({ color }) {
    const showToast = useToast();

    // Step 1: Convert HEX to HSL
    const rgb = hexToRgb(color);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    // Step 2: Generate all palettes
    const generatedPalettes = Object.entries(paletteGenerators).map(
        ([name, generator]) => {
            const hslList = generator(hsl);
            const hexList = hslList.map((h) => {
                const { r, g, b } = hslToRgb(h.h, h.s, h.l);
                return rgbToHex(r, g, b);
            });

            return { name, color: hexList };
        }
    );

    const handleCopy = (hex) => {
        navigator.clipboard.writeText(hex);
        showToast(`Copied ${hex.toUpperCase()} to clipboard!`);
    };

    return (
        <div className="card">
            <h2>Recommend Palette</h2>

            <div className="card-palette">
                {generatedPalettes.map((palette, i) => (
                    <div className="card-palette-color" key={i}>
                        <p>{palette.name}</p>
                        <div className="card-palette-color-list">
                            {palette.color?.map((color, i) => {
                                return (
                                    <div
                                        className={`item ${color}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleCopy(color)}
                                    >
                                        <BiCopy className="copy" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ColorPalette;
