import { describe, expect, test } from 'vitest';
import {
  generateMonochrome,
  generateComplementary,
  generateAnalogous,
  generateTriadic,
  generateTetradic,
  generateSquare,
  HSL
} from '../utils/colorPalette';

function createBase(): HSL {
  return { h: 200, s: 50, l: 50 };
}

describe('Color Theory Palette Generators', () => {
  const base = createBase();

  test('generateMonochrome returns 5 shades with same hue', () => {
    const palette = generateMonochrome(base);
    expect(palette).toHaveLength(5);
    palette.forEach(color => {
      expect(color.h).toBe(base.h);
      expect(color.s).toBe(base.s);
      expect(color.l).toBeGreaterThanOrEqual(0);
      expect(color.l).toBeLessThanOrEqual(100);
    });
  });

  test('generateComplementary returns 2 colors with 180° hue difference', () => {
    const [original, complement] = generateComplementary(base);
    expect(original.h).toBe(base.h);
    expect(complement.h).toBe((base.h + 180) % 360);
  });

  test('generateAnalogous returns colors ±30° from base', () => {
    const [left, center, right] = generateAnalogous(base);
    expect(center.h).toBe(base.h);
    expect(left.h).toBe((base.h - 30 + 360) % 360);
    expect(right.h).toBe((base.h + 30) % 360);
  });

  test('generateTriadic returns colors at 120° and 240° offsets', () => {
    const [center, t1, t2] = generateTriadic(base);
    expect(center.h).toBe(base.h);
    expect(t1.h).toBe((base.h + 120) % 360);
    expect(t2.h).toBe((base.h + 240) % 360);
  });

  test('generateTetradic returns 4-color pattern with two complements', () => {
    const palette = generateTetradic(base);
    expect(palette).toHaveLength(4);
    expect(palette.map(p => p.h)).toEqual([
      base.h,
      (base.h + 60) % 360,
      (base.h + 180) % 360,
      (base.h + 240) % 360,
    ]);
  });

  test('generateSquare returns 4 evenly spaced hues', () => {
    const palette = generateSquare(base);
    expect(palette).toHaveLength(4);
    expect(palette.map(p => p.h)).toEqual([
      base.h,
      (base.h + 90) % 360,
      (base.h + 180) % 360,
      (base.h + 270) % 360,
    ]);
  });
});
