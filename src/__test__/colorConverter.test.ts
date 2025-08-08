import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  rgbToCmyk,
  cmykToRgb,
} from '../utils/colorConverter';
import { describe, it, expect } from 'vitest';

describe('Color Converter', () => {
  it('converts HEX to RGB correctly', () => {
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('#abc')).toEqual({ r: 170, g: 187, b: 204 });
    expect(hexToRgb('#1a2b3c')).toEqual({ r: 26, g: 43, b: 60 });
  });

  it('converts RGB to HEX correctly', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
    expect(rgbToHex(26, 43, 60)).toBe('#1a2b3c');
  });

  it('converts RGB to HSL correctly', () => {
    expect(rgbToHsl(255, 0, 0)).toEqual({ h: 0, s: 100, l: 50 });
    expect(rgbToHsl(0, 255, 0)).toEqual({ h: 120, s: 100, l: 50 });
    expect(rgbToHsl(0, 0, 255)).toEqual({ h: 240, s: 100, l: 50 });
  });

  it('converts HSL to RGB correctly', () => {
    expect(hslToRgb(0, 100, 50)).toEqual({ r: 255, g: 0, b: 0 });
    expect(hslToRgb(120, 100, 50)).toEqual({ r: 0, g: 255, b: 0 });
    expect(hslToRgb(240, 100, 50)).toEqual({ r: 0, g: 0, b: 255 });
  });

  it('converts RGB to CMYK correctly', () => {
    expect(rgbToCmyk(0, 0, 0)).toEqual({ c: 0, m: 0, y: 0, k: 100 });
    expect(rgbToCmyk(255, 255, 255)).toEqual({ c: 0, m: 0, y: 0, k: 0 });
    expect(rgbToCmyk(255, 0, 0)).toMatchObject({ c: 0, m: 100, y: 100, k: 0 });
  });

  it('converts CMYK to RGB correctly', () => {
    expect(cmykToRgb(0, 0, 0, 100)).toEqual({ r: 0, g: 0, b: 0 });
    expect(cmykToRgb(0, 0, 0, 0)).toEqual({ r: 255, g: 255, b: 255 });
    expect(cmykToRgb(0, 100, 100, 0)).toEqual({ r: 255, g: 0, b: 0 });
  });

  it('ensures round-trip RGB → HEX → RGB consistency', () => {
    const original = { r: 66, g: 165, b: 245 };
    const hex = rgbToHex(original.r, original.g, original.b);
    const converted = hexToRgb(hex);
    expect(converted).toEqual(original);
  });

  it('ensures round-trip RGB → HSL → RGB consistency (approximate)', () => {
    const original = { r: 66, g: 165, b: 245 };
    const hsl = rgbToHsl(original.r, original.g, original.b);
    const rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
    expect(rgb.r).toBeCloseTo(original.r, 0);
    expect(rgb.g).toBeCloseTo(original.g, 0);
    expect(rgb.b).toBeCloseTo(original.b, 0);
  });
});
