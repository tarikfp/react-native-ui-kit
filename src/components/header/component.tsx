import PropTypes from "prop-types";
import React from "react";
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { BaseColors, BaseFonts, BaseShadow } from "../../theme";
import { StylePropType } from "../utils";
import HeaderIcon from "./components/icon";
import HeaderImage from "./components/image";
import HeaderTitle from "./components/title";

const DEFAULT_HEADER_HEIGHT = 56;

export type Props = ViewProps & {
  /**
   * Style of the header
   */
  readonly style?: StyleProp<ViewStyle>;
  /**
   * List item height
   * @default 56
   */
  readonly height?: number;
  /**
   * Applies to shadow to the list item.
   * @default false
   */
  readonly hasShadow?: boolean;
  /**
   * Background color of the header.
   * @default #0075E1
   */
  readonly backgroundColor?: string;
};

/**
 * ## Usage
 * ```js
 *     <Header height={72}>
 *       <Header.Title label="Home screen" />
 *       <Header.Image
 *         source={{
 *           uri: "https://reactnative.dev/img/logo-og.png",
 *         }}
 *       />
 *       <Header.Icon
 *         alignment="end"
 *         name="arrow-right"
 *         type="MaterialCommunityIcons"
 *       />
 *     </Header>
 * ```
 */

function Header({
  height = DEFAULT_HEADER_HEIGHT,
  hasShadow = false,
  style,
  backgroundColor = "#0075E1",
  children,
  ...touchableOpacityProps
}: Props) {
  const shadowStyle = hasShadow ? BaseShadow : undefined;

  return (
    <View
      style={StyleSheet.flatten<ViewStyle>([
        styles.wrapper,
        { height, backgroundColor },
        shadowStyle,
        style,
      ])}
      {...touchableOpacityProps}>
      {React.Children.toArray(children)
        .filter((child) => child !== null && typeof child !== "boolean")
        .map((child, childInd) => {
          if (!React.isValidElement(child)) {
            return null;
          }

          let props:
            | {
                style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
                wrapperStyle?: StyleProp<ViewStyle>;
              }
            | undefined;

          if (child.type === HeaderTitle) {
            props = {
              wrapperStyle: {
                height,
              },
              style: [
                BaseFonts.h3,
                {
                  color: BaseColors.textWhite,
                  marginLeft: childInd !== 0 ? 8 : 0,
                },
                child.props.style,
              ],
            };
          }

          if (child.type === HeaderIcon) {
            props = {
              style: [styles.icon, child.props.style],
            };
          }

          if (child.type === HeaderImage) {
            props = {
              style: [styles.image, child.props.style],
            };
          }

          return React.cloneElement(child, props);
        })}
    </View>
  );
}

Header.Icon = HeaderIcon;
Header.Image = HeaderImage;
Header.Title = HeaderTitle;

export default Header;

Header.propTypes = {
  style: StylePropType,
  height: PropTypes.number,
  hasShadow: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

interface Styles {
  wrapper: ViewStyle;
  icon: TextStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    height: 56,
    borderColor: BaseColors.borderColor,
    backgroundColor: BaseColors.paper,
  },
  icon: {
    fontSize: 26,
    marginHorizontal: 4,
  },
  image: {
    marginHorizontal: 4,
    width: 30,
    height: 36,
  },
});
