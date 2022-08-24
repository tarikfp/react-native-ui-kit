import PropTypes from "prop-types";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { StylePropType } from "../utils";
import Icon, { IconProps } from "../vector-icons";

const DEFAULT_ICON_SIZE = 32;

type Props = {
  /**
   * size of the avatar
   * @default 32
   *
   */
  size?: number;
  /**
   * background color of the avatar
   * @default rgba(35, 47, 72, 1)
   */
  backgroundColor?: string;
  /**
   * avatar style
   */
  style?: StyleProp<ViewStyle>;
  /**
   * icon name
   */
  name: IconProps["name"];
  /**
   * icon type
   */
  type: IconProps["type"];
  /**
   * icon color
   */
  color?: IconProps["color"];
  /**
   * icon props
   */
  iconProps?: IconProps;
};

function AvatarIcon({
  size = DEFAULT_ICON_SIZE,
  backgroundColor = "rgba(35, 47, 72, 1)",
  iconProps,
  name,
  color,
  type,
  style
}: Props) {
  return (
    <View
      style={[
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
        styles.wrapper,
        style
      ]}>
      <Icon
        size={size * 0.7}
        name={name}
        type={type}
        color={color}
        {...iconProps}
      />
    </View>
  );
}

export default AvatarIcon;

AvatarIcon.propTypes = {
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  style: StylePropType,
  name: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  iconProps: PropTypes.object
};

AvatarIcon.displayName = "Avatar.Icon";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center"
  }
});
