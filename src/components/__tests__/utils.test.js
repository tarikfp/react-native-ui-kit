import * as React from "react";
import { Text, View } from "react-native";
import * as Utils from "../utils";

describe("tests utils functions", () => {
  it("returns contrastedTextColor", () => {
    expect(Utils.getContrastedTextColor("darkblue")).toBe("white");
  });

  it("returns extractedStyleEntry correctly", () => {
    expect(
      Utils.extractStyleEntry(
        [{ padding: 8, margin: 20 }, { margin: 16 }],
        "margin"
      )
    ).toBe(16);
  });

  it("should test correctly whether the given color is type of hex color", () => {
    expect(Utils.isHexColor("#40e0d0")).toBe(true);

    expect(Utils.isHexColor("#240e0d0")).toBe(false);
  });

  it("should test correctly whether the given color is type of rgb(a) color", () => {
    expect(Utils.isRgbColor("rgba(34, 51, 84, 0.5)")).toBe(true);

    expect(Utils.isHexColor("rgba(34, 51, 84, 0.5,2)")).toBe(false);
  });

  it("should convert rgb color to hex color correctly", () => {
    expect(Utils.rgbToHex(34, 51, 84)).toBe("#223354");
  });

  it("should return rgb colors object from rgb string correctly", () => {
    expect(Utils.getRgbColorsFromStr("rgba(34, 51, 84, 0.5)")).toMatchObject({
      red: 34,
      green: 51,
      blue: 84,
    });
  });

  it("should return hex color string from rgb color", () => {
    const color = "rgba(26, 45, 86, 0.4)";

    expect(Utils.getHexColor(color)).toBe(
      Utils.rgbToHex(
        Utils.getRgbColorsFromStr(color).red,
        Utils.getRgbColorsFromStr(color).green,
        Utils.getRgbColorsFromStr(color).blue
      )
    );
  });

  it("should return hex color string from named colors", () => {
    expect(Utils.getHexColor("aquamarine")).toBe("#7fffd4");
  });

  it("should return hex color string from color string which is already in format of hex", () => {
    expect(Utils.getHexColor("#7fffd4")).toBe("#7fffd4");
  });

  it("should return deepest child from the component tree", () => {
    expect(
      Utils.findFinalChild(
        <View>
          <View>
            <Text>Deepest child</Text>
          </View>
        </View>
      ).props.children
    ).toBe("Deepest child");
  });
});
