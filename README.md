# ColorPrism

Simple color manipulation functions.

Compatible for both Node.js and browser apps.

## Installation

Download from [CDN](https://cdn.jsdelivr.net/npm/color-prism/dist/color-prism.min.js) or install from [npm](https://www.npmjs.com/package/color-prism)

`npm install --save color-prism`

## Usage

### Node.js

On Node.js all the methods are available in the package level

```javascript
// Import the package
const ColorPrism = require('color-prism');

// Create a new rgb color object;
const rgbColor = ColorPrism.rgb(200, 0, 10);
```

### Browser

On browsers, there are 3 aways to access the library:

* Use `ColorPrism` global object directly.
* Use `window.ColorPrism` instead.
* Use the methods directly. However the constants object will not be available this way.

## Reference

* [ColorPrism](#module_color-prism)
    * [degreesToRad(degrees)](#module_color-prism..degreesToRad) ⇒ <code>number</code>
    * [RGB(r, g, b)](#module_color-prism..RGB) ⇒ <code>RGB</code>
        * [.normalize()](#module_color-prism..RGB+normalize) ⇒ <code>RGB</code>
        * [.grayScale()](#module_color-prism..RGB+grayScale) ⇒ <code>RGB</code>
    * [rgb(r, g, b)](#module_color-prism..rgb) ⇒ <code>RGB</code>
    * [HSL(h, s, l)](#module_color-prism..HSL) ⇒ <code>HSL</code>
    * [hsl(h, s, l)](#module_color-prism..hsl) ⇒ <code>HSL</code>
    * [CMYK(c, m, y, k)](#module_color-prism..CMYK) ⇒ <code>CMYK</code>
    * [cmyk(c, m, y, k)](#module_color-prism..cmyk) ⇒ <code>CMYK</code>
    * [rgbToHsl(r, g, b)](#module_color-prism..rgbToHsl) ⇒ <code>HSL</code>
    * [hslToRgb(h, s, l)](#module_color-prism..hslToRgb) ⇒ <code>RGB</code>
    * [rgbToCmyk(r, g, b)](#module_color-prism..rgbToCmyk) ⇒ <code>CMYK</code>
    * [cmykToRgb(c, m, y, k)](#module_color-prism..cmykToRgb) ⇒ <code>RGB</code>
    * [normalize(r, g, b)](#module_color-prism..normalize) ⇒ <code>RGB</code>
    * [grayScale(r, g, b)](#module_color-prism..grayScale) ⇒ <code>RGB</code>
    * [hue(h, r, g, b)](#module_color-prism..hue) ⇒ <code>RGB</code>
    * [saturation(s, r, g, b)](#module_color-prism..saturation) ⇒ <code>RGB</code>
    * [lighting(l, r, g, b)](#module_color-prism..lighting) ⇒ <code>RGB</code>
    * [cyan(c, r, g, b)](#module_color-prism..cyan) ⇒ <code>RGB</code>
    * [magenta(m, r, g, b)](#module_color-prism..magenta) ⇒ <code>RGB</code>
    * [yellow(y, r, g, b)](#module_color-prism..yellow) ⇒ <code>RGB</code>

<a name="module_color-prism..degreesToRad"></a>

### degreesToRad(degrees) ⇒ <code>number</code>
Convert degrees to radian

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type |
| --- | --- |
| degrees | <code>number</code> | 

<a name="module_color-prism..RGB"></a>

### RGB(r, g, b) ⇒ <code>RGB</code>
RGB class for storing color values

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red value (0..255) or {RGB} instance or {CMYK} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..RGB+normalize"></a>

#### RGB.normalize() ⇒ <code>RGB</code>
Change the range from `0 to 255` to `0 to 1`

**Kind**: instance method of [<code>RGB</code>](#module_color-prism..RGB)  

<a name="module_color-prism..RGB+grayScale"></a>

#### RGB.grayScale() ⇒ <code>RGB</code>
Get a gray scale rgb color from this color

**Kind**: instance method of [<code>RGB</code>](#module_color-prism..RGB)  

<a name="module_color-prism..rgb"></a>

### rgb(r, g, b) ⇒ <code>RGB</code>
RGB helper function

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..HSL"></a>

### HSL(h, s, l) ⇒ <code>HSL</code>
HSL class for storing color values

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| h | <code>number</code> | hue value (0..2PI) or {HSL} instance |
| s | <code>number</code> | saturation value (0..1) |
| l | <code>number</code> | lighting value (0..1) |

<a name="module_color-prism..hsl"></a>

### hsl(h, s, l) ⇒ <code>HSL</code>
HSL helper function

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| h | <code>number</code> | hue value (0..2PI) or {HSL} instance |
| s | <code>number</code> | saturation value (0..1) |
| l | <code>number</code> | lighting value (0..1) |

<a name="module_color-prism..CMYK"></a>

### CMYK(c, m, y, k) ⇒ <code>CMYK</code>
CMYK class for storing color values

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | cyan value (0..1) or {CMYK} instance or {RGB} instance |
| m | <code>number</code> | magenta value (0..1) |
| y | <code>number</code> | yellow value (0..1) |
| k | <code>number</code> | black key value (0..1) |

<a name="module_color-prism..cmyk"></a>

### cmyk(c, m, y, k) ⇒ <code>CMYK</code>
CMYK helper function

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | cyan value (0..1) or {CMYK} instance or {RGB} instance |
| m | <code>number</code> | magenta value (0..1) |
| y | <code>number</code> | yellow value (0..1) |
| k | <code>number</code> | black key value (0..1) |

<a name="module_color-prism..rgbToHsl"></a>

### rgbToHsl(r, g, b) ⇒ <code>HSL</code>
Method to convert RGB to HSL

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..hslToRgb"></a>

### hslToRgb(h, s, l) ⇒ <code>RGB</code>
Method to convert HSL to RGB

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| h | <code>number</code> | hue value (0..2PI) or {HSL} instance |
| s | <code>number</code> | saturation value (0..255) |
| l | <code>number</code> | lighting value (0..255) |

<a name="module_color-prism..rgbToCmyk"></a>

### rgbToCmyk(r, g, b) ⇒ <code>CMYK</code>
Method to convert RGB to CMYK

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..cmykToRgb"></a>

### cmykToRgb(c, m, y, k) ⇒ <code>RGB</code>
Method to convert CMYK to RGB

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | cyan value (0..1) or {CMYK} instance |
| m | <code>number</code> | magenta value (0..1) |
| y | <code>number</code> | yellow value (0..1) |
| k | <code>number</code> | black key value (0..1) |

<a name="module_color-prism..normalize"></a>

### normalize(r, g, b) ⇒ <code>RGB</code>
Change the range of a RGB color from `0 to 255` to `0 to 1`

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..grayScale"></a>

### grayScale(r, g, b) ⇒ <code>RGB</code>
Get a gray scale rgb color

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | red value (0..255) or {RGB} instance or {CMYK} instance or {HSL} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..hue"></a>

### hue(h, r, g, b) ⇒ <code>RGB</code>
Change the hue value of a RGB color

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| h | <code>number</code> | hue value (0..2PI) |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..saturation"></a>

### saturation(s, r, g, b) ⇒ <code>RGB</code>
Change the saturation value of a RGB color

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>any</code> | saturation value (0..1) |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..lighting"></a>

### lighting(l, r, g, b) ⇒ <code>RGB</code>
Change the lighting value of a RGB color

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| l | <code>any</code> | lighting value (0..1) |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..cyan"></a>

### cyan(c, r, g, b) ⇒ <code>RGB</code>
Change the cyan tone of a RGB color

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>any</code> | lighting value (0..1) |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..magenta"></a>

### magenta(m, r, g, b) ⇒ <code>RGB</code>
Change the magenta tone of a RGB color

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>any</code> | lighting value (0..1) |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

<a name="module_color-prism..yellow"></a>

### yellow(y, r, g, b) ⇒ <code>RGB</code>
Change the yellow tone of a RGB color

**Kind**: inner method of [<code>ColorPrism</code>](#module_color-prism)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>any</code> | lighting value (0..1) |
| r | <code>number</code> | red value (0..255) or {RGB} instance |
| g | <code>number</code> | green value (0..255) |
| b | <code>number</code> | blue value (0..255) |

