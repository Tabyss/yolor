import { useState } from "react";
import ColorGenerate from "./Pages/ColorGenerator/ColorGenerate";
import HexPicker from "./control/Picker";
import Footer from "./components/Footer";

function App() {
    const [pop, setPop] = useState(false);
    return (
        <div className="app">
            <div className="app-main">
                <ColorGenerate pop={pop} setPop={setPop} />
            </div>
        </div>
    );
}

export default App;
