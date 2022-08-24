import PropTypes from "prop-types";
import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Button, ButtonProps } from "../../button";
import { StylePropType } from "../../utils";

export type Props = ButtonProps & {
  /**
   * style of the button wrapper
   */
  wrapperStyle?: StyleProp<ViewStyle>;
  /**
   * alignment of the button
   */
  alignment?: "start" | "end";
};

export default function ListItemButton({
  alignment,
  wrapperStyle,
  ...buttonProps
}: Props) {
  return (
    <View style={[getWrapperStyle(alignment), wrapperStyle]}>
      <Button size="xsmall" {...buttonProps} />
    </View>
  );
}

const getWrapperStyle = (
  alignment?: "start" | "end"
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

ListItemButton.displayName = "ListItem.Button";

ListItemButton.propTypes = {
  style: StylePropType,
  alignment: PropTypes.oneOf(["start", "end"]),
};
