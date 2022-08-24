import PropTypes from "prop-types";
import * as React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import warnOnce from "warn-once";
import { BaseColors, BaseFonts } from "../../theme";
import { getContrastedTextColor, getHexColor, StylePropType } from "../utils";
import { default as Icon, IconProps } from "../vector-icons";

export type Props = TouchableOpacityProps & {
  /**
   * Overrides the default button style.
   */
  readonly style?: StyleProp<ViewStyle> | undefined;
  /**
   * Size of the button.
   * @default medium
   */
  readonly size?: "large" | "medium" | "small" | "xsmall";
  /**
   * Whether button is in loading state, indicator will be displayed in case of true
   */
  readonly loading?: boolean;
  /**
   * Overrides style for the button text
   */
  readonly labelStyle?: StyleProp<TextStyle>;
  /**
   * Displays text on the button
   */
  readonly label: string;
  /**
   * If provided text, start and end icon colors will be computed based on given backgroundColor.
   * @see Change text color based on brightness of the covered background area
   * https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
   *
   * Example:
   * Button text, start and end icon (if provided) colors will be `white` in case of the following example below
   *
   * ```js
   *  <Button
   *    backgroundColor="#6666FF"
   *    label="Go back"
   *  />
   * ```
   *
   *
   *
   * It can be overridden by the `style` prop
   *
   * Example: In the following example button background color will be `gold`
   * even though backgroundColor prop is provided.
   *
   *
   * ```js
   *  <Button
   *    size="large"
   *    backgroundColor="#6666FF"
   *    startIcon={{ name: "arrow-left", type: "MaterialCommunityIcons" }}
   *    label="Go back"
   *  />
   * ```
   *
   */
  readonly backgroundColor?: string;
  /**
   * Background color of button when disabled is true
   */
  readonly disabledBackgroundColor?: string;
  /**
   * Left aligned button icon
   * @see IconProps
   */
  readonly startIcon?: IconProps;
  /**
   * Right aligned button icon
   * @see IconProps
   */
  readonly endIcon?: IconProps;
  /**
   * Props of indicator which will be visible on loading state
   * @see ActivityIndicatorProps
   */
  readonly loadingProps?: ActivityIndicatorProps;
};

interface ButtonBaseStyle {
  buttonStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  iconStyle: { size: number };
}

function Button({
  size = "medium",
  labelStyle,
  label,
  loading,
  disabledBackgroundColor,
  loadingProps,
  backgroundColor,
  startIcon,
  endIcon,
  style,
  ...props
}: Props) {
  // Returns button size, should be one of the following 'large' | 'medium' | 'small'
  // If size does not match, return 'large' size as fallback

  const buttonSizeStyle = (): ButtonBaseStyle => {
    switch (size) {
      case "large":
        return {
          buttonStyle: {
            width: "100%",
            height: 56,
          },
          textStyle: {
            ...BaseFonts.h3,
          },
          iconStyle: {
            size: 25,
          },
        };
      case "medium":
        return {
          buttonStyle: {
            width: "80%",
            height: 48,
          },
          textStyle: {
            ...BaseFonts.h4,
          },
          iconStyle: {
            size: 22,
          },
        };
      case "small":
        return {
          buttonStyle: {
            minWidth: 103,
            height: 40,
            paddingHorizontal: 24,
          },
          textStyle: {
            ...BaseFonts.h4,
          },
          iconStyle: {
            size: 18,
          },
        };
      case "xsmall":
        return {
          buttonStyle: {
            minWidth: 83,
            height: 35,
            paddingHorizontal: 16,
          },
          textStyle: {
            ...BaseFonts.p1,
          },
          iconStyle: {
            size: 15,
          },
        };
      default:
        warnOnce(
          true,
          `Invalid button size. Should be one of the following... "large" | "medium" | "small" | "xsmall"`
        );

        return {
          buttonStyle: {
            minWidth: 103,
            height: 40,
            paddingHorizontal: 24,
          },
          textStyle: {
            ...BaseFonts.h4,
          },
          iconStyle: {
            size: 18,
          },
        };
    }
  };

  // prevent recomputing contrast color on every render
  // in order to avoid flickering on text color
  const textContrastColor = React.useMemo(() => {
    if (backgroundColor) {
      return getContrastedTextColor(getHexColor(backgroundColor));
    }
  }, [backgroundColor]);

  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity ?? 0.5}
      style={StyleSheet.flatten<ViewStyle>([
        buttonSizeStyle().buttonStyle,
        styles.btnBase,
        {
          backgroundColor: props.disabled
            ? disabledBackgroundColor ?? backgroundColor
            : backgroundColor,
        },
        style,
      ])}
      {...props}>
      <View style={styles.innerContainer}>
        {!loading && startIcon && (
          <Icon
            style={StyleSheet.flatten<ViewStyle>([
              { marginRight: 6 },
              startIcon.style,
            ])}
            size={buttonSizeStyle().iconStyle.size}
            color={textContrastColor}
            {...startIcon}
          />
        )}

        <RNText
          style={StyleSheet.flatten<TextStyle>([
            { color: textContrastColor },
            buttonSizeStyle().textStyle,
            labelStyle,
          ])}>
          {label}
        </RNText>

        {loading ? (
          <ActivityIndicator
            style={StyleSheet.flatten<ViewStyle>([
              styles.indicator,
              loadingProps?.style,
            ])}
            size={buttonSizeStyle().iconStyle.size}
            color={textContrastColor}
            {...loadingProps}
          />
        ) : (
          endIcon && (
            <Icon
              style={StyleSheet.flatten<TextStyle>([
                { marginLeft: 6 },
                endIcon.style,
              ])}
              size={buttonSizeStyle().iconStyle.size}
              color={textContrastColor}
              {...endIcon}
            />
          )
        )}
      </View>
    </TouchableOpacity>
  );
}

export default Button;

Button.propTypes = {
  style: StylePropType,
  size: PropTypes.oneOf(["large", "medium", "small", "xsmall"]),
  loading: PropTypes.bool,
  labelStyle: StylePropType,
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabledBackgroundColor: PropTypes.string,
  startIcon: PropTypes.object,
  endIcon: PropTypes.object,
  indicatorProps: PropTypes.object,
};

interface Styles {
  btnBase: ViewStyle;
  indicator: ViewStyle;
  innerContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  btnBase: {
    borderRadius: 6,
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: BaseColors.borderColor,
    backgroundColor: BaseColors.primary,
  },
  indicator: {
    marginLeft: 14,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
