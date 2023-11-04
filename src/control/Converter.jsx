function HexConvert(hex, path) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    //RGB
    let r = parseInt(result[1], [16]),
      g = parseInt(result[2], [16]),
      b = parseInt(result[3], [16]);
  
    //HSL
    let r1 = r / 255,
      g1 = g / 255,
      b1 = b / 255;
  
    let max = Math.max(r1, g1, b1),
      min = Math.min(r1, g1, b1);
      
    let h,
      s,
      l = (max + min) / 2; //get Luminance
    if (max == min) {
      h = s = 0;
    } else {
      let c = max - min;
      s = l > 0.5 ? c / (2 - max - min) : c / (max + min); //get Saturation
      switch (max) { //get Hue
        case r1:
          h = (g1 - b1) / c + (g1 < b1 ? 6 : 0);
          break;
        case g1:
          h = (b1 - r1) / c + 2;
          break;
        case b1:
          h = (r1 - g1) / c + 4;
          break;
      }
      h = Math.round(h * 60);
      s = Math.round(s * 100);
      l = Math.round(l * 100);
    }
    if (path == "rgb") {
      return (r + ", " + g + ", " + b);
    } else if (path == "hsl") {
      return (h + ", " + s + ", " + l);
    } else {
      return (min)
    }
  }

  export default HexConvert;