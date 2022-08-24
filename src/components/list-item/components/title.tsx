import PropTypes from "prop-types";
import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewStyle
} from "react-native";
import { BaseColors, BaseFonts } from "../../../theme";
import { StylePropType } from "../../utils";

export type Props = TextProps & {
  /**
   * style of the title text
   */
  style?: StyleProp<TextStyle>;
  /**
   * style of the wrapper view
   */
  wrapperStyle?: StyleProp<ViewStyle>;
  /**
   * text to display for title
   */
  title: string;
  /**
   * text to display for subtitle
   */
  subtitle?: string;
  /**
   * subtitle style
   */
  subtitleStyle?: StyleProp<TextStyle>;
};

export default function ListItemTitle({
  title,
  style: titleStyle,
  subtitle,
  wrapperStyle,
  subtitleStyle,
  ...textProps
}: Props) {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Text style={[styles.titleStyle, titleStyle]} {...textProps}>
        {title}
      </Text>

      {subtitle !== undefined && (
        <Text style={[styles.subtitleStyle, subtitleStyle]} {...textProps}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  titleStyle: {
    ...BaseFonts.h3,
    textAlign: "left",
    color: BaseColors.textDark
  },
  subtitleStyle: {
    textAlign: "left",
    ...BaseFonts.h4,
    color: BaseColors.textDark
  }
});

ListItemTitle.displayName = "ListItem.Title";

ListItemTitle.propTypes = {
  style: StylePropType,
  wrapperStyle: StylePropType,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleStyle: StylePropType
};
