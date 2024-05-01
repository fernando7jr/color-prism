const ColorPrism = require('./color-prism');

let expect;
let should;
before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
    should = chai.should;
});

describe('ColorPrism', () => {
    let red;
    let blue;
    let green;

    beforeEach(() => {
        red = {r: 255, g: 0, b: 0};
        blue = {r: 0, g: 255, b: 0};
        green = {r: 0, g: 0, b: 255};
    });

    it('should be a module object', () => {
        expect(ColorPrism).to.be.ok;
    });

    it('should contain the degreesToRad method', () => {
        expect(ColorPrism).to.have.property('degreesToRad');
        expect(ColorPrism.degreesToRad).to.be.a('function');
    });

    it('should contain the rgb method', () => {
        expect(ColorPrism).to.have.property('rgb');
        expect(ColorPrism.rgb).to.be.a('function');
    });

    it('should create a rgb object for the red color', () => {
        const rgbColor = ColorPrism.rgb(255, 0, 0);
        expect(rgbColor.r).to.equal(red.r);
        expect(rgbColor.g).to.equal(red.b);
        expect(rgbColor.b).to.equal(red.g);
    });

    it('should create a rgb object for the green color', () => {
        const rgbColor = ColorPrism.rgb(0, 255, 0);
        expect(rgbColor.r).to.equal(green.r);
        expect(rgbColor.g).to.equal(green.b);
        expect(rgbColor.b).to.equal(green.g);
    });

    it('should create a rgb object for the blue color', () => {
        const rgbColor = ColorPrism.rgb(0, 0, 255);
        expect(rgbColor.r).to.equal(blue.r);
        expect(rgbColor.g).to.equal(blue.b);
        expect(rgbColor.b).to.equal(blue.g);
    });
});


describe('ColorPrism', () => {
    let red;
    let blue;
    let green;
    let d120Rad;
    let d240Rad;
    const testColor = (color, expectedColor) => {
        expect(color.r).be.closeTo(expectedColor.r, 0.001);
        expect(color.g).be.closeTo(expectedColor.g, 0.001);
        expect(color.b).be.closeTo(expectedColor.b, 0.001);
    };
    
    beforeEach(() => {
        red = ColorPrism.rgb(255, 0, 0);
        green = ColorPrism.rgb(0, 255, 0);
        blue = ColorPrism.rgb(0, 0, 255);
        d120Rad = ColorPrism.constants.d120Rad;
        d240Rad = ColorPrism.constants.d240Rad;
    })

    it('should convert from rgb to hsl correctly', () => {
        let hslColor;
        hslColor = ColorPrism.rgbToHsl(red);
        expect(hslColor).to.deep.equal(ColorPrism.hsl(0, 1, 0.5));
        hslColor = ColorPrism.rgbToHsl(green);
        expect(hslColor).to.deep.equal(ColorPrism.hsl(d120Rad, 1, 0.5));
        hslColor = ColorPrism.rgbToHsl(blue);
        expect(hslColor).to.deep.equal(ColorPrism.hsl(d240Rad, 1, 0.5));
    });

    it('should convert from hsl to rgb correctly', () => {
        let rgbColor;
        rgbColor = ColorPrism.hslToRgb(0, 1, 0.5);
        expect(rgbColor).to.deep.equal(red);
        rgbColor = ColorPrism.hslToRgb(d120Rad, 1, 0.5);
        expect(rgbColor).to.deep.equal(green);
        rgbColor = ColorPrism.hslToRgb(d240Rad, 1, 0.5);
        expect(rgbColor).to.deep.equal(blue);
    });

    it('should convert from rgb to cmyk correctly', () => {
        let cmykColor;
        cmykColor = ColorPrism.rgbToCmyk(red);
        expect(cmykColor).to.deep.equal(ColorPrism.cmyk(0, 1, 1, 0));
        cmykColor = ColorPrism.rgbToCmyk(green);
        expect(cmykColor).to.deep.equal(ColorPrism.cmyk(1, 0, 1, 0));
        cmykColor = ColorPrism.rgbToCmyk(blue);
        expect(cmykColor).to.deep.equal(ColorPrism.cmyk(1, 1, 0, 0));
    });

    it('should convert from cmyk to rgb correctly', () => {
        let rgbColor;
        rgbColor = ColorPrism.cmykToRgb(0, 1, 1, 0);
        expect(rgbColor).to.deep.equal(red);
        rgbColor = ColorPrism.cmykToRgb(1, 0, 1, 0);
        expect(rgbColor).to.deep.equal(green);
        rgbColor = ColorPrism.cmykToRgb(1, 1, 0, 0);
        expect(rgbColor).to.deep.equal(blue);
    });

    it('should normalize a color', () => {
        let rgbColor;
        rgbColor = ColorPrism.normalize(255, 255, 255);
        testColor(rgbColor, {r: 1, b: 1, g: 1});
    });

    it('should get a gray scale color', () => {
        let rgbColor;
        rgbColor = ColorPrism.grayScale(red);
        testColor(rgbColor, {r: 85, b: 85, g: 85});
    });

    it('should change the hue value of a rgb color correctly', () => {        
        let rgbColor;
        const d88Rad = ColorPrism.degreesToRad(88);
        const expectedColor = ColorPrism.rgb(136, 255, 0);

        rgbColor = ColorPrism.hue(d88Rad, red);
        testColor(rgbColor, expectedColor);
        rgbColor = ColorPrism.hue(d88Rad, green);
        testColor(rgbColor, expectedColor);
        rgbColor = ColorPrism.hue(d88Rad, blue);
        testColor(rgbColor, expectedColor);
    });

    it('should change the saturation value of a rgb color correctly', () => {        
        let rgbColor;
        const expectedColor = ColorPrism.rgb(204, 51, 51);

        rgbColor = ColorPrism.saturation(0.6, red);
        testColor(rgbColor, expectedColor);
    });

    it('should change the lighting value of a rgb color correctly', () => {        
        let rgbColor;
        const expectedColor = ColorPrism.rgb(204, 0, 0);

        rgbColor = ColorPrism.lighting(0.4, red);
        testColor(rgbColor, expectedColor);
    });

    it('should change the cyan value of a rgb color correctly', () => {        
        let rgbColor;
        const expectedColor = ColorPrism.rgb(153, 0, 0);

        rgbColor = ColorPrism.cyan(0.4, red);
        testColor(rgbColor, expectedColor);
    });
    
    it('should change the magenta value of a rgb color correctly', () => {        
        let rgbColor;
        const expectedColor = ColorPrism.rgb(255, 76.5, 0);

        rgbColor = ColorPrism.magenta(0.7, red);
        testColor(rgbColor, expectedColor);
    });

    it('should change the yellow value of a rgb color correctly', () => {        
        let rgbColor;
        const expectedColor = ColorPrism.rgb(255, 0, 229.5);

        rgbColor = ColorPrism.yellow(0.1, red);
        testColor(rgbColor, expectedColor);
    });
});

