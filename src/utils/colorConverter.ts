// utils/colorConverter.ts

// ✅ HEX → RGB
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const int = parseInt(hex, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

// ✅ RGB → HEX
export function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map(x => Math.round(x).toString(16).padStart(2, '0'))
      .join('')
  );
}

// ✅ RGB → HSL
export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
  let h = 0,
      s = 0,
      l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5
      ? d / (2 - max - min)
      : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }

  return { h, s: s * 100, l: l * 100 };
}

// ✅ HSL → RGB
export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60)       [r, g, b] = [c, x, 0];
  else if (h < 120)           [r, g, b] = [x, c, 0];
  else if (h < 180)           [r, g, b] = [0, c, x];
  else if (h < 240)           [r, g, b] = [0, x, c];
  else if (h < 300)           [r, g, b] = [x, 0, c];
  else                        [r, g, b] = [c, 0, x];

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

// ✅ RGB → CMYK
export function rgbToCmyk(r: number, g: number, b: number): { c: number; m: number; y: number; k: number } {
  const rf = r / 255, gf = g / 255, bf = b / 255;
  const k = 1 - Math.max(rf, gf, bf);
  const c = (1 - rf - k) / (1 - k) || 0;
  const m = (1 - gf - k) / (1 - k) || 0;
  const y = (1 - bf - k) / (1 - k) || 0;
  return {
    c: c * 100,
    m: m * 100,
    y: y * 100,
    k: k * 100,
  };
}

// ✅ CMYK → RGB
export function cmykToRgb(c: number, m: number, y: number, k: number): { r: number; g: number; b: number } {
  c /= 100;
  m /= 100;
  y /= 100;
  k /= 100;

  return {
    r: Math.round(255 * (1 - c) * (1 - k)),
    g: Math.round(255 * (1 - m) * (1 - k)),
    b: Math.round(255 * (1 - y) * (1 - k)),
  };
}
