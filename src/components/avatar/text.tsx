import PropTypes from "prop-types";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { StylePropType } from "../utils";

const DEFAULT_AVATAR_TEXT_SIZE = 32;

type Props = {
  /**
   * text to display on avatar
   */
  label: string;
  /**
   * size of the avatar
   * @default 32
   *
   */
  size?: number;
  /**
   * label color
   * @default #FFFFFF
   */
  labelColor?: string;
  /**
   * background color of the avatar
   * @default rgba(35, 47, 72, 1)
   */
  backgroundColor?: string;
  /**
   * avatar label wrapper style
   */
  style?: StyleProp<ViewStyle>;
  /**
   * avatar label style
   */
  labelStyle?: StyleProp<TextStyle>;
};

function AvatarText({
  label,
  size = DEFAULT_AVATAR_TEXT_SIZE,
  labelColor = "#FFFFFF",
  backgroundColor = "rgba(35, 47, 72, 1)",
  labelStyle,
  style,
}: Props) {
  return (
    <View
      style={[
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
        styles.wrapper,
        style,
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: labelColor,
            fontSize: size / 2.25,
            lineHeight: size,
          },
          labelStyle,
        ]}
        numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

export default AvatarText;

AvatarText.propTypes = {
  label: PropTypes.string,
  size: PropTypes.number,
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: StylePropType,
  labelStyle: StylePropType,
};

AvatarText.displayName = "Avatar.Text";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
  },
});
