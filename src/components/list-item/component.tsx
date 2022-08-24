import PropTypes from "prop-types";
import React from "react";
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { BaseColors, BaseFonts, BaseShadow } from "../../theme";
import ListItemButton from "./components/button";
import ListItemIcon from "./components/icon";
import ListItemImage from "./components/image";
import ListItemTitle from "./components/title";

const DEFAULT_LIST_ITEM_HEIGHT = 56;
export type Props = TouchableOpacityProps & {
  /**
   * List item height
   * @default 56
   */
  readonly height?: number;
  /**
   * List item style.
   */
  readonly style?: StyleProp<ViewStyle>;
  /**
   * Applies to shadow to the list item.
   * @default false
   */
  readonly hasShadow?: boolean;
  /**
   * Background color of the list item.
   * @default #FFFFFF
   */
  readonly backgroundColor?: string;
};

/**
 * ## Usage
 * ```js
 *     <ListItem height={72}>
 *       <ListItem.Icon name="light-bulb" type="Entypo" color="gold" />
 *       <ListItem.Title label="Find new ideas! " />
 *       <ListItem.Image
 *         source={{
 *           uri: "https://reactnative.dev/img/logo-og.png",
 *         }}
 *       />
 *       <ListItem.Icon
 *         alignment="end"
 *         name="arrow-right"
 *         type="MaterialCommunityIcons"
 *       />
 *     </ListItem>
 * ```
 */

const ListItem = ({
  height = DEFAULT_LIST_ITEM_HEIGHT,
  activeOpacity = 0.4,
  hasShadow = false,
  style,
  backgroundColor = "#FFFFFF",
  children,
  ...touchableOpacityProps
}: Props) => {
  const shadowStyle = hasShadow ? BaseShadow : undefined;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
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

          if (child.type === ListItemTitle) {
            props = {
              wrapperStyle: {
                height,
                marginLeft: childInd !== 0 ? 8 : 0,
              },
              style: [BaseFonts.h3, child.props.style],
            };
          }

          if (child.type === ListItemIcon) {
            props = {
              style: [styles.icon, child.props.style],
            };
          }

          if (child.type === ListItemImage) {
            props = {
              style: [styles.image, child.props.style],
            };
          }

          if (child.type === ListItemButton) {
            props = {
              style: [styles.button, child.props.style],
            };
          }

          return React.cloneElement(child, props);
        })}
    </TouchableOpacity>
  );
};

ListItem.Icon = ListItemIcon;
ListItem.Image = ListItemImage;
ListItem.Title = ListItemTitle;
ListItem.Button = ListItemButton;

export default ListItem;

ListItem.propTypes = {
  height: PropTypes.number,
  hasShadow: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

interface Styles {
  wrapper: ViewStyle;
  icon: TextStyle;
  image: ImageStyle;
  button: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flexDirection: "row",
    borderRadius: 8,
    minWidth: "100%",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: BaseColors.borderColor,
    backgroundColor: BaseColors.paper,
  },
  icon: {
    fontSize: 26,
    marginHorizontal: 4,
  },
  button: {
    marginHorizontal: 4,
  },
  image: {
    marginHorizontal: 4,
    width: 30,
    height: 36,
  },
});
