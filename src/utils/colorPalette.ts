export type HSL = { h: number; s: number; l: number };

/**
 * Ensure hue stays in 0-360 range.
 */
function normalizeHue(h: number): number {
  return (h + 360) % 360;
}

/**
 * Monochrome: same hue, varied lightness
 */
export function generateMonochrome(base: HSL): HSL[] {
  return [
    { ...base, l: Math.max(0, base.l * 0.6) },
    { ...base, l: Math.max(0, base.l * 0.8) },
    base,
    { ...base, l: Math.min(100, base.l * 1.2) },
    { ...base, l: Math.min(100, base.l * 1.4) },
  ];
}

/**
 * Complementary: opposite color on the wheel
 */
export function generateComplementary(base: HSL): HSL[] {
  return [
    base,
    { ...base, h: normalizeHue(base.h + 180) },
  ];
}

/**
 * Analogous: adjacent hues (±30°)
 */
export function generateAnalogous(base: HSL): HSL[] {
  return [
    { ...base, h: normalizeHue(base.h - 30) },
    base,
    { ...base, h: normalizeHue(base.h + 30) },
  ];
}

/**
 * Triadic: 3 colors spaced by 120°
 */
export function generateTriadic(base: HSL): HSL[] {
  return [
    base,
    { ...base, h: normalizeHue(base.h + 120) },
    { ...base, h: normalizeHue(base.h + 240) },
  ];
}

/**
 * Tetradic: 2 complementary pairs (e.g. 0°, 60°, 180°, 240°)
 */
export function generateTetradic(base: HSL): HSL[] {
  return [
    base,
    { ...base, h: normalizeHue(base.h + 60) },
    { ...base, h: normalizeHue(base.h + 180) },
    { ...base, h: normalizeHue(base.h + 240) },
  ];
}

/**
 * Square: 4 colors evenly spaced 90°
 */
export function generateSquare(base: HSL): HSL[] {
  return [
    base,
    { ...base, h: normalizeHue(base.h + 90) },
    { ...base, h: normalizeHue(base.h + 180) },
    { ...base, h: normalizeHue(base.h + 270) },
  ];
}
