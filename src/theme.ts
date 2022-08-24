import { Platform, TextStyle } from "react-native";

export const BaseColors = {
  primary: "#0075E1",
  primaryDisabled: "rgba(119, 161, 243, 0.1)",
  background: "rgba(247, 249, 253, 1)",
  textWhite: "rgba(255, 255, 255, 1)",
  border: "rgba(4, 32, 87, 0.1)",
  textDark: "rgba(35, 47, 72, 1)",
  textLight: "rgba(23, 37, 86, 0.4)",
  textRed: "rgba(253, 81, 95, 1)",
  inputBorderLightGray: "rgba(0, 0, 0, 0.1)",
  halfMainDark: "rgba(34, 51, 84, 0.5)",
  shadowColor: "rgba(45, 97, 185, 0.04)",
  transparent: "#00000000",
  paper: "#FFFFFF",
  green: "rgba(52, 199, 89, 1)",
  backdrop: "rgba(115,111,111, 0.6)",
  disabled: "rgba(119, 161, 243, 0.1)",
  placeholder: "#F6F6F6",
  error: "#FF0000",
  borderColor: "rgba(0, 0, 0,0.05)",
  grey: "#A09AA5",
  lightGrey: "#DEDEDE",
  disabledInputGrey: "#F9F9F9",
};

export const BaseShadow = {
  ...Platform.select({
    android: {
      shadowColor: "#A09AA5",
      elevation: 2,
    },
    ios: {
      shadowColor: "rgba(45, 97, 185, 0.04)",
      shadowOffset: {
        width: 3,
        height: 4,
      },
      shadowOpacity: 1.25,
      shadowRadius: 1,
    },
  }),
};

export type Fonts = "h1" | "h2" | "h3" | "h4" | "p1";

export const BaseFonts: Record<Fonts, TextStyle> = {
  h1: {
    fontSize: 40,
    lineHeight: 60,
    fontWeight: "500",
  },
  h2: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "500",
  },
  h3: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  h4: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  p1: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "400",
  },
};

export type BaseColorType = typeof BaseColors;
export type BaseFontType = typeof BaseFonts;
