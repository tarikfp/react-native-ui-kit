import PropTypes from "prop-types";
import * as React from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { StylePropType } from "../../utils";
import type { IconProps } from "../../vector-icons";
import { default as Icon } from "../../vector-icons";

export type Props = IconProps & {
  /**
   * style of the icon
   */
  style?: StyleProp<TextStyle>;
  /**
   * style of the icon wrapper element
   */
  wrapperStyle?: StyleProp<ViewStyle>;
  /**
   * alignment of the icon
   */
  alignment?: "start" | "end";
};

export default function ListItemIcon({
  style,
  alignment,
  wrapperStyle,
  ...iconProps
}: Props) {
  return (
    <View style={[getWrapperStyle(alignment), wrapperStyle]}>
      <Icon style={style} {...iconProps} />
    </View>
  );
}

const getWrapperStyle = (
  alignment?: "start" | "end",
): StyleProp<ViewStyle> => ({
  flex: alignment ? 1 : 0,
  flexDirection: "row",
  justifyContent:
    alignment === "start"
      ? "flex-start"
      : alignment === "end"
      ? "flex-end"
      : "center",
});

ListItemIcon.displayName = "ListItem.Icon";

ListItemIcon.propTypes = {
  style: StylePropType,
  alignment: PropTypes.oneOf(["start", "end"]),
};
