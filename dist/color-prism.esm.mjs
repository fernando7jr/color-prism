/**
 * Simple color manipulation functions.
 * Compatible for both Node.js and browser apps.
 * @module color-prism
 */

/**
 * Convert degrees to radians
 * @param  {number} degrees 
 * @return {number}
 */
const degreesToRad = (degrees) => degrees * (Math.PI / 180);

const _60dRad = degreesToRad(60);
const _120dRad = degreesToRad(120);
const _180dRad = degreesToRad(180);
const _240dRad = degreesToRad(240);
const _300dRad = degreesToRad(300);

/**
 * RGB class for storing color values
 * @param  {number} r red value (0..255) or {RGB} instance or {CMYK} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
class RGB {
    constructor(r, g, b) {
        if (r instanceof CMYK) {
            const object = cmykToRgb(r);
            r = object.r || 0;
            g = object.g || 0;
            b = object.b || 0;
        } else if (r instanceof RGB || typeof r === 'object') {
            const object = r;
            r = object.r || 0;
            g = object.g || 0;
            b = object.b || 0;
        }
        this.r = r;
        this.g = g;
        this.b = b;
    }

    /**
     * Change the range from `0 to 255` to `0 to 1`
     * @return {RGB}
     */
    normalize() {
        return rgb(
            this.r / 255,
            this.g / 255,
            this.b / 255
        );
    }

    /**
     * Get a gray scale rgb color from this color
     * @return {RGB}
     */
    grayScale() {
        const mean = (this.r + this.g + this.b) / 3;
        return rgb(mean, mean, mean);
    }
}

/**
 * RGB helper function
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
const rgb = (r, g, b) => new RGB(r, g, b);

/**
 * HSL class for storing color values
 * @param  {number} h hue value (0..2PI) or {HSL} instance
 * @param  {number} s saturation value (0..1)
 * @param  {number} l lighting value (0..1)
 * @return {HSL}
 */
class HSL {
    constructor(h, s, l) {
        if (h instanceof HSL || typeof h === 'object') {
            const object = h;
            h = object.h || 0;
            s = object.s || 0;
            l = object.l || 0;
        }
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

/**
 * HSL helper function
 * @param  {number} h hue value (0..2PI) or {HSL} instance
 * @param  {number} s saturation value (0..1)
 * @param  {number} l lighting value (0..1)
 * @return {HSL}
 */
const hsl = (h, s, l) => new HSL(h, s, l);

/**
 * CMYK class for storing color values
 * @param  {number} c cyan value (0..1) or {RGB} instance or {CMYK} instance
 * @param  {number} m magenta value (0..1)
 * @param  {number} y yellow value (0..1)
 * @param  {number} k key value (0..1)
 * @return {CMYK}
 */
class CMYK {
    constructor(c, m, y, k) {
        if (c instanceof RGB) {
            const object = rgbToCmyk(c);
            c = object.c || 0;
            m = object.m || 0;
            y = object.y || 0;
            k = object.k || 0;
        } else if (c instanceof CMYK || typeof c === 'object') {
            const object = c;
            c = object.c || 0;
            m = object.m || 0;
            y = object.y || 0;
            k = object.k || 0;
        }
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
}

/**
 * CMYK helper function
 * @param  {number} c cyan value (0..1) or {CMYK} instance
 * @param  {number} m magenta value (0..1)
 * @param  {number} y yellow value (0..1)
 * @param  {number} k key value (0..1)
 * @return {CMYK}
 */
const cmyk = (c, m, y, k) => new CMYK(c, m, y, k);

/**
 * Check the `r, g or b` values and fix them when is out of range (0..255)
 * @param  {RGB} rgb 
 * @return {RGB}
 */
const __checkAndFixRgbRange = (rgb) => {
    rgb.r = Math.max(0, Math.min(255, rgb.r));
    rgb.g = Math.max(0, Math.min(255, rgb.g));
    rgb.b = Math.max(0, Math.min(255, rgb.b));
    return rgb;
};

/**
 * Convert a rgb color to hsl
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {HSL}
 */
const rgbToHsl = (r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const delta = max - min;
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        switch (max) {
            case r:
                h = ((g - b) / delta + (g < b ? 6 : 0)) * _60dRad;
                break;
            case g:
                h = ((b - r) / delta + 2) * _60dRad;
                break;
            case b:
                h = ((r - g) / delta + 4) * _60dRad;
                break;
        }
    }

    return hsl(h, s, l);
};

/**
 * Aux function for `hslToRgb`
 * @param  {number} p
 * @param  {number} q
 * @param  {number} t
 * @return {number}
 */
const __hslToRgbAux = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
};

/**
 * Convert a hsl color to rgb
 * @param  {number} h hue value (0..2PI) or {HSL} instance
 * @param  {number} s saturation value (0..1)
 * @param  {number} l lighting value (0..1)
 * @return {RGB}
 */
const hslToRgb = (h, s, l) => {
    if (h instanceof HSL || typeof h === 'object') {
        const object = h;
        h = object.h || 0;
        s = object.s || 0;
        l = object.l || 0;
    }

    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = __hslToRgbAux(p, q, h / degreesToRad(360) + 1 / 3);
        g = __hslToRgbAux(p, q, h / degreesToRad(360));
        b = __hslToRgbAux(p, q, h / degreesToRad(360) - 1 / 3);
    }

    return rgb(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
};

/**
 * Convert a rgb color to cmyk
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {CMYK}
 */
const rgbToCmyk = (r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }

    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    let k = Math.min(c, m, y);

    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);

    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;

    return cmyk(c, m, y, k);
};

/**
 * Convert a cmyk color to rgb
 * @param  {number} c cyan value (0..1) or {CMYK} instance
 * @param  {number} m magenta value (0..1)
 * @param  {number} y yellow value (0..1)
 * @param  {number} k key value (0..1)
 * @return {RGB}
 */
const cmykToRgb = (c, m, y, k) => {
    if (c instanceof CMYK || typeof c === 'object') {
        const object = c;
        c = object.c || 0;
        m = object.m || 0;
        y = object.y || 0;
        k = object.k || 0;
    }

    const r = 255 * (1 - c) * (1 - k);
    const g = 255 * (1 - m) * (1 - k);
    const b = 255 * (1 - y) * (1 - k);

    return rgb(Math.round(r), Math.round(g), Math.round(b));
};

/**
 * Normalize a rgb color
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
const normalize = (r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }
    return rgb(
        r / 255,
        g / 255,
        b / 255
    );
};

/**
 * Get a gray scale rgb color from a color
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
const grayScale = (r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }
    const mean = (r + g + b) / 3;
    return rgb(mean, mean, mean);
};

/**
 * Change the hue of a rgb color
 * @param  {number} h hue value (0..2PI)
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
const hue = (h, r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }
    const hslColor = rgbToHsl(r, g, b);
    hslColor.h = h;
    return hslToRgb(hslColor);
};

/**
 * Change the saturation of a rgb color
 * @param  {number} s saturation value (0..1)
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
const saturation = (s, r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }
    const hslColor = rgbToHsl(r, g, b);
    hslColor.s = s;
    return hslToRgb(hslColor);
};

/**
 * Change the lighting of a rgb color
 * @param  {number} l lighting value (0..1)
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
const lighting = (l, r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }
    const hslColor = rgbToHsl(r, g, b);
    hslColor.l = l;
    return hslToRgb(hslColor);
};

/**
 * Change the cyan of a rgb color
 * @param  {number} c cyan value (0..1)
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
const cyan = (c, r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }
    const cmykColor = rgbToCmyk(r, g, b);
    cmykColor.c = c;
    return __checkAndFixRgbRange(cmykToRgb(cmykColor));
};

/**
 * Change the magenta of a rgb color
 * @param  {number} m magenta value (0..1)
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
const magenta = (m, r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }
    const cmykColor = rgbToCmyk(r, g, b);
    cmykColor.m = m;
    return __checkAndFixRgbRange(cmykToRgb(cmykColor));
};

/**
 * Change the yellow of a rgb color
 * @param  {number} y yellow value (0..1)
 * @param  {number} r red value (0..255) or {RGB} instance
 * @param  {number} g green value (0..255)
 * @param  {number} b blue value (0..255)
 * @return {RGB}
 */
const yellow = (y, r, g, b) => {
    if (r instanceof RGB || typeof r === 'object') {
        const object = r;
        r = object.r || 0;
        g = object.g || 0;
        b = object.b || 0;
    }
    const cmykColor = rgbToCmyk(r, g, b);
    cmykColor.y = y;
    return __checkAndFixRgbRange(cmykToRgb(cmykColor));
};

/**
 * Generate the constant color object
 * @param  {RGB} rgbColor 
 * @return {object}
 */
const __generateConstantObject = (rgbColor) => {
    return {
        rgb: rgbColor,
        hsl: rgbToHsl(rgbColor),
        cmyk: rgbToCmyk(rgbColor)
    };
};

/**
 * Color prism constants
 */
export const constants = {
    d60Rad: _60dRad,
    d120Rad: _120dRad,
    d180Rad: _180dRad,
    d240Rad: _240dRad,
    d300Rad: _300dRad,
    d360Rad: degreesToRad(360)
};

/**
 * Predefined color constants
 */
export const colors = {
    white: __generateConstantObject(rgb(255, 255, 255)),
    black: __generateConstantObject(rgb(0, 0, 0)),
    red: __generateConstantObject(rgb(255, 0, 0)),
    green: __generateConstantObject(rgb(0, 255, 0)),
    blue: __generateConstantObject(rgb(0, 0, 255)),
};

// Export all functions and classes
export {
    degreesToRad,
    RGB,
    rgb,
    HSL,
    hsl,
    CMYK,
    cmyk,
    rgbToHsl,
    hslToRgb,
    rgbToCmyk,
    cmykToRgb,
    normalize,
    grayScale,
    hue,
    saturation,
    lighting,
    cyan,
    magenta,
    yellow
};

// Default export for convenience
export default {
    degreesToRad,
    RGB,
    rgb,
    HSL,
    hsl,
    CMYK,
    cmyk,
    rgbToHsl,
    hslToRgb,
    rgbToCmyk,
    cmykToRgb,
    normalize,
    grayScale,
    hue,
    saturation,
    lighting,
    cyan,
    magenta,
    yellow,
    constants,
    colors
};
