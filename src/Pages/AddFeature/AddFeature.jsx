import ColorPalette from "./components/ColorPalette";
import ColorCard from "./components/ColorCard";
import ColorConvert from "./components/ColorConvert";
import ColorForm from "./components/ColorForm";
import './AddFeature.scss'

function AddFeature({ pop, color, bw }) {
  return (
    <>
      <div className={pop ? "add active" : "add"}>
        <div className="main-feat">
          <ColorPalette color={color} />
          <ColorCard color={color} bw={bw} />
          <ColorForm color={color} />
        </div>
      </div>
    </>
  );
}

export default AddFeature;
