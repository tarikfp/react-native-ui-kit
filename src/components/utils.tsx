/* eslint-disable prefer-template */
/* eslint-disable no-bitwise */
import PropTypes from "prop-types";
import * as React from "react";
import type { StyleProp } from "react-native";

export const StylePropType = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object,
  PropTypes.number,
  PropTypes.bool,
]);

const RGBColorRegExp = new RegExp(
  /^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/gm,
);

const RGBAColorRegExp = new RegExp(
  /^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/gm,
);

const HexRegExp = new RegExp(/^#(?:[A-Fa-f0-9]{3}){1,2}$/gm);

const RnColorNames = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  "indianred ": "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370d8",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#d87093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};

/**
 * @param {String} hexcolor value
 * @return {String} The contrasting color (black or white)
 */
export function getContrastedTextColor(hexcolor: string | undefined) {
  if (!hexcolor) return "black";

  let computedHexColor = hexcolor;

  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === "#") {
    computedHexColor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    computedHexColor = hexcolor
      .split("")
      .map(function (hex) {
        return hex + hex;
      })
      .join("");
  }

  // Convert to RGB value
  const r = parseInt(computedHexColor.substring(0, 2), 16);
  const g = parseInt(computedHexColor.substring(2, 2), 16);
  const b = parseInt(computedHexColor.substring(4, 2), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? "black" : "white";
}

/**
 * @param style
 * @param key of style
 * @example <ViewStyle> , 'backgroundColor'
 */
export function extractStyleEntry<T, K extends keyof T>(
  style: StyleProp<T>,
  styleKey: K,
) {
  if (Array.isArray(style)) {
    return (style[style.length - 1] as T)[styleKey];
  }

  return (style as T)[styleKey];
}

// Hex color helpers

function isHexColor(color: string) {
  return HexRegExp.test(color);
}

function isRgbColor(color: string) {
  return RGBColorRegExp.test(color) && RGBAColorRegExp.test(color);
}

function colorNameToHex(color: string) {
  const colorKey = color.toLowerCase() as keyof typeof RnColorNames;

  if (typeof RnColorNames[colorKey] !== "undefined") {
    return RnColorNames[colorKey];
  }
  return "#ffffff";
}

function rgbToHex(red: number, green: number, blue: number) {
  const rgb = (red << 16) | (green << 8) | (blue << 0);
  return "#" + (0x1000000 + rgb).toString(16).slice(1);
}

function getRgbColorsFromStr(rgbColor: string) {
  const colorEntry = rgbColor
    .substring(rgbColor.indexOf("(") + 1, rgbColor.lastIndexOf(")"))
    .split(/,\s*/);

  return {
    red: Number(colorEntry[0]),
    green: Number(colorEntry[1]),
    blue: Number(colorEntry[2]),
    opacity: Number(colorEntry[3]),
  };
}

export function getHexColor(color: string) {
  if (new Set(Object.keys(RnColorNames)).has(color)) {
    return colorNameToHex(color);
  }

  if (color) {
    if (isHexColor(color)) return color;

    // convert rgb to hex color
    if (isRgbColor(color)) {
      return rgbToHex(
        getRgbColorsFromStr(color).red,
        getRgbColorsFromStr(color).green,
        getRgbColorsFromStr(color).blue,
      );
    }
  }
}

/**
 *
 * @param children elements to mapped over
 * @returns deepest child
 */
export function findFinalChild(children: React.ReactNode): any {
  return React.Children.toArray(children).map((child) => {
    let finalChild = child;

    if (!React.isValidElement(finalChild)) {
      return child;
    }

    if (finalChild.props.children) {
      finalChild = findFinalChild(finalChild.props.children);
    }

    return finalChild;
  })[0];
}
