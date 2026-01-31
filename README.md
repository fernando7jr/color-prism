# ColorPrism

![npm version](https://img.shields.io/npm/v/color-prism.svg)
![npm downloads](https://img.shields.io/npm/dm/color-prism.svg)
![license](https://img.shields.io/npm/l/color-prism.svg)

A lightweight, modern color manipulation library for JavaScript and TypeScript. Simple, fast, and compatible with both Node.js and browsers.

## Features

- 🎨 Support for RGB, HSL, and CMYK color spaces
- 🔄 Easy color conversions between different formats
- 🎯 Simple color transformations (hue, saturation, lightness, etc.)
- 📦 Multiple distribution formats (CommonJS, ESM, minified)
- 📘 Full TypeScript support with type definitions
- 🌐 Works in both Node.js and browsers
- ⚡ Zero dependencies
- 🔧 Chainable API with utility functions

## Installation

### NPM

```bash
npm install color-prism
```

### CDN

For browsers, you can use the minified version from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/color-prism/dist/color-prism.min.js"></script>
```

## Usage

### ES Modules (Modern JavaScript/TypeScript)

```javascript
// Import everything
import ColorPrism from 'color-prism';
const red = ColorPrism.rgb(255, 0, 0);

// Or import specific functions
import { rgb, hsl, rgbToHsl, saturation } from 'color-prism';

const color = rgb(255, 128, 0);
const hslColor = rgbToHsl(color);
const desaturated = saturation(0.3, color);
```

### CommonJS (Node.js)

```javascript
const ColorPrism = require('color-prism');

// Create color objects
const red = ColorPrism.rgb(255, 0, 0);
const blue = ColorPrism.hsl(4.71, 1, 0.5); // 270 degrees in radians
```

### Browser (Global)

```html
<script src="https://cdn.jsdelivr.net/npm/color-prism/dist/color-prism.min.js"></script>
<script>
  // Access via ColorPrism object
  const red = ColorPrism.rgb(255, 0, 0);
  
  // Or use functions directly
  const blue = rgb(0, 0, 255);
  const purple = saturation(0.8, blue);
</script>
```

### TypeScript

ColorPrism includes full TypeScript definitions:

```typescript
import { RGB, HSL, rgb, hsl, rgbToHsl } from 'color-prism';

const color: RGB = rgb(255, 128, 0);
const hslColor: HSL = rgbToHsl(color);

console.log(`RGB: ${color.r}, ${color.g}, ${color.b}`);
console.log(`HSL: ${hslColor.h}, ${hslColor.s}, ${hslColor.l}`);
```

## Quick Examples

### Creating Colors

```javascript
import { rgb, hsl, cmyk } from 'color-prism';

// RGB: values from 0 to 255
const red = rgb(255, 0, 0);

// HSL: hue in radians (0 to 2π), saturation and lightness from 0 to 1
const blue = hsl(4.71, 1, 0.5);

// CMYK: values from 0 to 1
const cyan = cmyk(1, 0, 0, 0);
```

### Converting Between Color Spaces

```javascript
import { rgb, rgbToHsl, hslToRgb, rgbToCmyk, cmykToRgb } from 'color-prism';

const color = rgb(255, 128, 0);

// Convert to HSL
const hslColor = rgbToHsl(color);
console.log(hslColor); // { h: 0.524, s: 1, l: 0.5 }

// Convert to CMYK
const cmykColor = rgbToCmyk(color);
console.log(cmykColor); // { c: 0, m: 0.498, y: 1, k: 0 }

// Convert back to RGB
const backToRgb = cmykToRgb(cmykColor);
console.log(backToRgb); // { r: 255, g: 128, b: 0 }
```

### Color Transformations

```javascript
import { rgb, hue, saturation, lighting, grayScale } from 'color-prism';

const orange = rgb(255, 128, 0);

// Change hue (rotate color wheel)
const rotated = hue(3.14, orange); // π radians (180 degrees)

// Adjust saturation (0 = grayscale, 1 = fully saturated)
const desaturated = saturation(0.3, orange);

// Adjust lightness (0 = black, 0.5 = normal, 1 = white)
const darker = lighting(0.3, orange);

// Convert to grayscale
const gray = grayScale(orange);
```

### CMYK Adjustments

```javascript
import { rgb, cyan, magenta, yellow } from 'color-prism';

const color = rgb(255, 128, 0);

// Adjust individual CMYK components
const moreCyan = cyan(0.5, color);
const moreMagenta = magenta(0.7, color);
const moreYellow = yellow(0.9, color);
```

### Using Predefined Colors

```javascript
import { colors } from 'color-prism';

// Access common colors in all formats
console.log(colors.red.rgb);   // { r: 255, g: 0, b: 0 }
console.log(colors.red.hsl);   // HSL representation
console.log(colors.red.cmyk);  // CMYK representation

// Available colors: white, black, red, green, blue
```

### Utility Functions

```javascript
import { degreesToRad, normalize, constants } from 'color-prism';

// Convert degrees to radians for HSL hue
const hueInRadians = degreesToRad(180); // 3.14159...

// Normalize RGB values from 0-255 to 0-1
const normalized = normalize(255, 128, 0); // { r: 1, g: 0.502, b: 0 }

// Common angle constants
console.log(constants.d180Rad); // π
console.log(constants.d360Rad); // 2π
```

### Method Chaining

```javascript
import { rgb } from 'color-prism';

const color = rgb(255, 128, 0);

// Chain transformations using class methods
const result = color
  .normalize()    // Convert to 0-1 range
  .grayScale();   // Convert to grayscale
```

## API Reference

### Color Classes

#### `RGB(r, g, b)`
Creates an RGB color object.
- `r`: Red value (0-255) or RGB/CMYK instance
- `g`: Green value (0-255)
- `b`: Blue value (0-255)

**Methods:**
- `.normalize()`: Returns RGB with values in 0-1 range
- `.grayScale()`: Returns grayscale version

#### `HSL(h, s, l)`
Creates an HSL color object.
- `h`: Hue in radians (0-2π) or HSL instance
- `s`: Saturation (0-1)
- `l`: Lightness (0-1)

#### `CMYK(c, m, y, k)`
Creates a CMYK color object.
- `c`: Cyan (0-1) or CMYK/RGB instance
- `m`: Magenta (0-1)
- `y`: Yellow (0-1)
- `k`: Key/Black (0-1)

### Helper Functions

- `rgb(r, g, b)`: Create RGB instance
- `hsl(h, s, l)`: Create HSL instance
- `cmyk(c, m, y, k)`: Create CMYK instance

### Conversion Functions

- `rgbToHsl(r, g, b)`: Convert RGB to HSL
- `hslToRgb(h, s, l)`: Convert HSL to RGB
- `rgbToCmyk(r, g, b)`: Convert RGB to CMYK
- `cmykToRgb(c, m, y, k)`: Convert CMYK to RGB

### Transformation Functions

- `normalize(r, g, b)`: Normalize RGB values to 0-1 range
- `grayScale(r, g, b)`: Convert to grayscale
- `hue(h, r, g, b)`: Change hue
- `saturation(s, r, g, b)`: Change saturation
- `lighting(l, r, g, b)`: Change lightness
- `cyan(c, r, g, b)`: Adjust cyan component
- `magenta(m, r, g, b)`: Adjust magenta component
- `yellow(y, r, g, b)`: Adjust yellow component

### Utility Functions

- `degreesToRad(degrees)`: Convert degrees to radians

### Constants

**Angle Constants:**
- `constants.d60Rad`: 60° in radians
- `constants.d120Rad`: 120° in radians
- `constants.d180Rad`: 180° in radians
- `constants.d240Rad`: 240° in radians
- `constants.d300Rad`: 300° in radians
- `constants.d360Rad`: 360° in radians

**Color Constants:**
- `colors.white`: White color in all formats
- `colors.black`: Black color in all formats
- `colors.red`: Red color in all formats
- `colors.green`: Green color in all formats
- `colors.blue`: Blue color in all formats

## Browser Support

The minified version (`dist/color-prism.min.js`) supports:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Legacy browsers with ES5 support
- Internet Explorer 9+

The ESM version (`dist/color-prism.esm.js`) requires:
- Modern browsers with ES6+ support
- Node.js 12+

## TypeScript Support

ColorPrism includes full TypeScript type definitions. No need to install additional `@types` packages.

```typescript
import { RGB, HSL, CMYK, rgb, rgbToHsl } from 'color-prism';

const myColor: RGB = rgb(255, 128, 0);
const converted: HSL = rgbToHsl(myColor);
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build distribution files
npm run build
```

## License

GPL-3.0-or-later

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Repository

[https://github.com/fernando7jr/color-prism](https://github.com/fernando7jr/color-prism)
