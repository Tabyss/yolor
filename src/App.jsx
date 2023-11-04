import { useState } from "react";
import ColorGenerate from "./components/ColorGenerate";
import ColorPalette from "./components/ColorPalette";
import HexPicker from "./control/Picker";


function App() {
  const [color, setColor] = useState(HexPicker)
  return (
    <div className="app">
      <div className="app-main">
        <ColorGenerate/>
        <ColorPalette />
      </div>
    </div>
  );
}

export default App;
