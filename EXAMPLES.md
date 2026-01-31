# ColorPrism Examples

This file provides comprehensive examples of using the ColorPrism library.

## Table of Contents

- [Installation](#installation)
- [Basic Color Creation](#basic-color-creation)
- [Color Conversions](#color-conversions)
- [Color Transformations](#color-transformations)
- [Advanced Usage](#advanced-usage)
- [TypeScript Usage](#typescript-usage)

## Installation

```bash
npm install color-prism
```

## Basic Color Creation

### Creating RGB Colors

```javascript
import { rgb } from 'color-prism';

// Create a red color
const red = rgb(255, 0, 0);
console.log(red); // { r: 255, g: 0, b: 0 }

// Create an orange color
const orange = rgb(255, 128, 0);

// Access individual components
console.log(`Red: ${orange.r}, Green: ${orange.g}, Blue: ${orange.b}`);
```

### Creating HSL Colors

```javascript
import { hsl, degreesToRad } from 'color-prism';

// Create a blue color (270 degrees = 4.71 radians)
const blue = hsl(4.71, 1, 0.5);

// Convert degrees to radians
const red = hsl(degreesToRad(0), 1, 0.5);
const green = hsl(degreesToRad(120), 1, 0.5);
```

### Creating CMYK Colors

```javascript
import { cmyk } from 'color-prism';

// Create a cyan color
const cyan = cmyk(1, 0, 0, 0);

// Create a magenta color
const magenta = cmyk(0, 1, 0, 0);
```

## Color Conversions

### RGB to HSL

```javascript
import { rgb, rgbToHsl } from 'color-prism';

const purple = rgb(128, 0, 255);
const hslPurple = rgbToHsl(purple);

console.log(`Hue: ${hslPurple.h}, Saturation: ${hslPurple.s}, Lightness: ${hslPurple.l}`);

// You can also pass values directly
const hslColor = rgbToHsl(128, 0, 255);
```

### HSL to RGB

```javascript
import { hsl, hslToRgb } from 'color-prism';

const hslColor = hsl(3.14, 0.8, 0.5);
const rgbColor = hslToRgb(hslColor);

console.log(`R: ${rgbColor.r}, G: ${rgbColor.g}, B: ${rgbColor.b}`);
```

### RGB to CMYK

```javascript
import { rgb, rgbToCmyk } from 'color-prism';

const color = rgb(255, 100, 50);
const cmykColor = rgbToCmyk(color);

console.log(`C: ${cmykColor.c}, M: ${cmykColor.m}, Y: ${cmykColor.y}, K: ${cmykColor.k}`);
```

### CMYK to RGB

```javascript
import { cmyk, cmykToRgb } from 'color-prism';

const cmykColor = cmyk(0.5, 0.3, 0.2, 0.1);
const rgbColor = cmykToRgb(cmykColor);
```

## Color Transformations

### Adjusting Hue (Color Rotation)

```javascript
import { rgb, hue, degreesToRad } from 'color-prism';

const orange = rgb(255, 128, 0);

// Rotate 180 degrees
const complementary = hue(degreesToRad(180), orange);

// Rotate 60 degrees
const analogous = hue(degreesToRad(60), orange);
```

### Adjusting Saturation

```javascript
import { rgb, saturation } from 'color-prism';

const vibrant = rgb(255, 0, 128);

// Reduce saturation (make it more gray)
const muted = saturation(0.3, vibrant);

// Full desaturation (grayscale)
const gray = saturation(0, vibrant);

// Increase saturation
const hyperSaturated = saturation(1, vibrant);
```

### Adjusting Lightness

```javascript
import { rgb, lighting } from 'color-prism';

const normalBlue = rgb(0, 0, 255);

// Make it darker
const darkBlue = lighting(0.3, normalBlue);

// Make it lighter
const lightBlue = lighting(0.7, normalBlue);

// Make it very dark (almost black)
const nearBlack = lighting(0.1, normalBlue);

// Make it very light (almost white)
const nearWhite = lighting(0.9, normalBlue);
```

### Converting to Grayscale

```javascript
import { rgb, grayScale } from 'color-prism';

const colorful = rgb(255, 128, 64);
const gray = grayScale(colorful);

console.log(gray); // All RGB components will be equal
```

### Normalizing Colors

```javascript
import { rgb, normalize } from 'color-prism';

const color = rgb(255, 128, 0);

// Convert to 0-1 range
const normalized = normalize(color);
console.log(normalized); // { r: 1, g: ~0.5, b: 0 }
```

### CMYK Component Adjustments

```javascript
import { rgb, cyan, magenta, yellow } from 'color-prism';

const color = rgb(200, 100, 50);

// Increase cyan component
const moreCyan = cyan(0.8, color);

// Increase magenta component
const moreMagenta = magenta(0.6, color);

// Increase yellow component
const moreYellow = yellow(0.9, color);
```

## Advanced Usage

### Working with Predefined Colors

```javascript
import { colors, rgbToHsl, rgbToCmyk } from 'color-prism';

// Use predefined colors (all are RGB objects)
console.log('Red RGB:', colors.red);        // RGB { r: 255, g: 0, b: 0 }
console.log('White RGB:', colors.white);    // RGB { r: 255, g: 255, b: 255 }
console.log('Black RGB:', colors.black);    // RGB { r: 0, g: 0, b: 0 }

// Convert to other formats as needed
const redHsl = rgbToHsl(colors.red);
const redCmyk = rgbToCmyk(colors.red);

// Available colors: white, black, red, green, blue
const white = colors.white;
const black = colors.black;
```

### Using Constants

```javascript
import { constants, hsl } from 'color-prism';

// Use predefined angle constants
const red = hsl(0, 1, 0.5);
const yellow = hsl(constants.d60Rad, 1, 0.5);
const green = hsl(constants.d120Rad, 1, 0.5);
const cyan = hsl(constants.d180Rad, 1, 0.5);
const blue = hsl(constants.d240Rad, 1, 0.5);
const magenta = hsl(constants.d300Rad, 1, 0.5);
```

### Chaining Color Operations

```javascript
import { rgb, rgbToHsl, hslToRgb, saturation } from 'color-prism';

const originalColor = rgb(255, 128, 0);

// Convert to HSL, desaturate, and convert back
const desaturated = hslToRgb(
  saturation(0.3, rgbToHsl(originalColor))
);

// Using class methods for chaining
const normalized = originalColor.normalize();
const gray = normalized.grayScale();
```

### Creating Color Palettes

```javascript
import { hsl, hslToRgb, degreesToRad } from 'color-prism';

// Create a complementary color palette
function createComplementaryPalette(baseHue) {
  const color1 = hslToRgb(hsl(baseHue, 0.8, 0.5));
  const color2 = hslToRgb(hsl(baseHue + degreesToRad(180), 0.8, 0.5));
  
  return [color1, color2];
}

// Create a triadic color palette
function createTriadicPalette(baseHue) {
  const color1 = hslToRgb(hsl(baseHue, 0.8, 0.5));
  const color2 = hslToRgb(hsl(baseHue + degreesToRad(120), 0.8, 0.5));
  const color3 = hslToRgb(hsl(baseHue + degreesToRad(240), 0.8, 0.5));
  
  return [color1, color2, color3];
}

// Create an analogous color palette
function createAnalogousPalette(baseHue) {
  const color1 = hslToRgb(hsl(baseHue - degreesToRad(30), 0.8, 0.5));
  const color2 = hslToRgb(hsl(baseHue, 0.8, 0.5));
  const color3 = hslToRgb(hsl(baseHue + degreesToRad(30), 0.8, 0.5));
  
  return [color1, color2, color3];
}

// Use the palette generators
const complementary = createComplementaryPalette(degreesToRad(120)); // Green base
const triadic = createTriadicPalette(degreesToRad(0)); // Red base
const analogous = createAnalogousPalette(degreesToRad(240)); // Blue base
```

### Creating Tint and Shade Variations

```javascript
import { rgb, lighting } from 'color-prism';

function createTintsAndShades(baseColor, steps = 5) {
  const variations = [];
  
  // Create shades (darker versions)
  for (let i = steps; i > 0; i--) {
    const lightness = 0.5 * (i / (steps + 1));
    variations.push(lighting(lightness, baseColor));
  }
  
  // Add base color
  variations.push(baseColor);
  
  // Create tints (lighter versions)
  for (let i = 1; i <= steps; i++) {
    const lightness = 0.5 + 0.5 * (i / (steps + 1));
    variations.push(lighting(lightness, baseColor));
  }
  
  return variations;
}

// Use it
const blue = rgb(0, 0, 255);
const blueVariations = createTintsAndShades(blue, 5);
console.log(blueVariations);
```

## TypeScript Usage

```typescript
import { RGB, HSL, CMYK, rgb, hsl, cmyk, rgbToHsl, lighting, saturation } from 'color-prism';

// Type-safe color creation
const myColor: RGB = rgb(255, 128, 0);
const hslColor: HSL = hsl(3.14, 0.8, 0.5);
const cmykColor: CMYK = cmyk(0.5, 0.3, 0.2, 0.1);

// Type-safe conversions
const convertedColor: HSL = rgbToHsl(myColor);

// Using in functions with type safety
function darkenColor(color: RGB, amount: number): RGB {
  return lighting(amount, color);
}

// Creating a color utility class
class ColorUtility {
  private color: RGB;

  constructor(r: number, g: number, b: number) {
    this.color = rgb(r, g, b);
  }

  toHSL(): HSL {
    return rgbToHsl(this.color);
  }

  darken(amount: number): RGB {
    return lighting(amount, this.color);
  }

  desaturate(amount: number): RGB {
    return saturation(amount, this.color);
  }
}
```

## Browser Usage

```html
<!DOCTYPE html>
<html>
<head>
  <title>ColorPrism Example</title>
  <script src="https://cdn.jsdelivr.net/npm/color-prism/dist/color-prism.min.js"></script>
</head>
<body>
  <div id="colorBox" style="width: 200px; height: 200px;"></div>
  
  <script>
    // Using ColorPrism in the browser
    const color = ColorPrism.rgb(255, 128, 0);
    const hslColor = ColorPrism.rgbToHsl(color);
    
    // Apply color to element
    const box = document.getElementById('colorBox');
    box.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    
    // Or use functions directly (without ColorPrism prefix)
    const blue = rgb(0, 0, 255);
    box.style.backgroundColor = `rgb(${blue.r}, ${blue.g}, ${blue.b})`;
  </script>
</body>
</html>
```
