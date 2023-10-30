import HexConvert from "./Converter";

function Composition(hex) {
  let get = HexConvert(hex, "hsl");
  let arr = get.split(", ");
  let h = parseInt(arr[0]),
    s = parseInt(arr[1]),
    l = parseInt(arr[2]);
    
  return palette(h, s, l);
}

export default Composition;
