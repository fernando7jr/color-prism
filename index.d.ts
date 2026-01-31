/**
 * Simple color manipulation functions.
 * Compatible for both Node.js and browser apps.
 */

/**
 * RGB color class for storing red, green, and blue color values
 */
export class RGB {
  /** Red value (0..255) */
  r: number;
  /** Green value (0..255) */
  g: number;
  /** Blue value (0..255) */
  b: number;

  /**
   * Creates a new RGB color object
   * @param r - Red value (0..255), or RGB/CMYK instance, or object with r,g,b properties
   * @param g - Green value (0..255)
   * @param b - Blue value (0..255)
   */
  constructor(r: number | RGB | CMYK | { r: number; g: number; b: number }, g?: number, b?: number);

  /**
   * Change the range from `0 to 255` to `0 to 1`
   * @returns Normalized RGB color
   */
  normalize(): RGB;

  /**
   * Get a gray scale RGB color from this color
   * @returns Gray scale RGB color
   */
  grayScale(): RGB;
}

/**
 * HSL color class for storing hue, saturation, and lightness values
 */
export class HSL {
  /** Hue value (0..2π radians) */
  h: number;
  /** Saturation value (0..1) */
  s: number;
  /** Lightness value (0..1) */
  l: number;

  /**
   * Creates a new HSL color object
   * @param h - Hue value (0..2π radians), or HSL instance, or object with h,s,l properties
   * @param s - Saturation value (0..1)
   * @param l - Lightness value (0..1)
   */
  constructor(h: number | HSL | { h: number; s: number; l: number }, s?: number, l?: number);
}

/**
 * CMYK color class for storing cyan, magenta, yellow, and key (black) values
 */
export class CMYK {
  /** Cyan value (0..1) */
  c: number;
  /** Magenta value (0..1) */
  m: number;
  /** Yellow value (0..1) */
  y: number;
  /** Key/Black value (0..1) */
  k: number;

  /**
   * Creates a new CMYK color object
   * @param c - Cyan value (0..1), or RGB instance, or CMYK instance, or object with c,m,y,k properties
   * @param m - Magenta value (0..1)
   * @param y - Yellow value (0..1)
   * @param k - Key/Black value (0..1)
   */
  constructor(
    c: number | RGB | CMYK | { c: number; m: number; y: number; k: number },
    m?: number,
    y?: number,
    k?: number
  );
}

/**
 * Convert degrees to radians
 * @param degrees - Angle in degrees
 * @returns Angle in radians
 */
export function degreesToRad(degrees: number): number;

/**
 * Create a new RGB color object
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns RGB color object
 */
export function rgb(r: number | RGB, g?: number, b?: number): RGB;

/**
 * Create a new HSL color object
 * @param h - Hue value (0..2π radians), or HSL instance
 * @param s - Saturation value (0..1)
 * @param l - Lightness value (0..1)
 * @returns HSL color object
 */
export function hsl(h: number | HSL, s?: number, l?: number): HSL;

/**
 * Create a new CMYK color object
 * @param c - Cyan value (0..1), or CMYK instance
 * @param m - Magenta value (0..1)
 * @param y - Yellow value (0..1)
 * @param k - Key/Black value (0..1)
 * @returns CMYK color object
 */
export function cmyk(c: number | CMYK, m?: number, y?: number, k?: number): CMYK;

/**
 * Convert RGB color to HSL
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns HSL color object
 */
export function rgbToHsl(r: number | RGB, g?: number, b?: number): HSL;

/**
 * Convert HSL color to RGB
 * @param h - Hue value (0..2π radians), or HSL instance
 * @param s - Saturation value (0..1)
 * @param l - Lightness value (0..1)
 * @returns RGB color object
 */
export function hslToRgb(h: number | HSL, s?: number, l?: number): RGB;

/**
 * Convert RGB color to CMYK
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns CMYK color object
 */
export function rgbToCmyk(r: number | RGB, g?: number, b?: number): CMYK;

/**
 * Convert CMYK color to RGB
 * @param c - Cyan value (0..1), or CMYK instance
 * @param m - Magenta value (0..1)
 * @param y - Yellow value (0..1)
 * @param k - Key/Black value (0..1)
 * @returns RGB color object
 */
export function cmykToRgb(c: number | CMYK, m?: number, y?: number, k?: number): RGB;

/**
 * Normalize RGB color values from 0-255 range to 0-1 range
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns Normalized RGB color
 */
export function normalize(r: number | RGB, g?: number, b?: number): RGB;

/**
 * Convert an RGB color to grayscale
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns Gray scale RGB color
 */
export function grayScale(r: number | RGB, g?: number, b?: number): RGB;

/**
 * Change the hue of an RGB color
 * @param h - New hue value (0..2π radians)
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns RGB color with modified hue
 */
export function hue(h: number, r: number | RGB, g?: number, b?: number): RGB;

/**
 * Change the saturation of an RGB color
 * @param s - New saturation value (0..1)
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns RGB color with modified saturation
 */
export function saturation(s: number, r: number | RGB, g?: number, b?: number): RGB;

/**
 * Change the lightness of an RGB color
 * @param l - New lightness value (0..1)
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns RGB color with modified lightness
 */
export function lighting(l: number, r: number | RGB, g?: number, b?: number): RGB;

/**
 * Change the cyan component of an RGB color
 * @param c - New cyan value (0..1)
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns RGB color with modified cyan component
 */
export function cyan(c: number, r: number | RGB, g?: number, b?: number): RGB;

/**
 * Change the magenta component of an RGB color
 * @param m - New magenta value (0..1)
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns RGB color with modified magenta component
 */
export function magenta(m: number, r: number | RGB, g?: number, b?: number): RGB;

/**
 * Change the yellow component of an RGB color
 * @param y - New yellow value (0..1)
 * @param r - Red value (0..255), or RGB instance
 * @param g - Green value (0..255)
 * @param b - Blue value (0..255)
 * @returns RGB color with modified yellow component
 */
export function yellow(y: number, r: number | RGB, g?: number, b?: number): RGB;

/**
 * Constant values for common angles in radians
 */
export const constants: {
  /** 60 degrees in radians */
  d60Rad: number;
  /** 120 degrees in radians */
  d120Rad: number;
  /** 180 degrees in radians */
  d180Rad: number;
  /** 240 degrees in radians */
  d240Rad: number;
  /** 300 degrees in radians */
  d300Rad: number;
  /** 360 degrees in radians */
  d360Rad: number;
};

/**
 * Predefined color constants
 */
export const colors: {
  /** White color (RGB: 255, 255, 255) */
  white: Readonly<{
    rgb: RGB;
    hsl: HSL;
    cmyk: CMYK;
  }>;
  /** Black color (RGB: 0, 0, 0) */
  black: Readonly<{
    rgb: RGB;
    hsl: HSL;
    cmyk: CMYK;
  }>;
  /** Red color (RGB: 255, 0, 0) */
  red: Readonly<{
    rgb: RGB;
    hsl: HSL;
    cmyk: CMYK;
  }>;
  /** Green color (RGB: 0, 255, 0) */
  green: Readonly<{
    rgb: RGB;
    hsl: HSL;
    cmyk: CMYK;
  }>;
  /** Blue color (RGB: 0, 0, 255) */
  blue: Readonly<{
    rgb: RGB;
    hsl: HSL;
    cmyk: CMYK;
  }>;
};
