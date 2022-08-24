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

export default function HeaderTitle({
  style,
  title,
  subtitle,
  wrapperStyle,
  subtitleStyle,
  ...titleProps
}: Props) {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Text style={[styles.titleStyle, style]} {...titleProps}>
        {title}
      </Text>

      {subtitle !== undefined && (
        <Text style={[styles.subtitleStyle, subtitleStyle]} {...titleProps}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    ...BaseFonts.h2,
    textAlign: "left",
    color: BaseColors.textWhite
  },
  subtitleStyle: {
    ...BaseFonts.h3,
    textAlign: "left",
    color: BaseColors.textWhite
  }
});

HeaderTitle.displayName = "Header.Title";

HeaderTitle.propTypes = {
  style: StylePropType,
  wrapperStyle: StylePropType,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleStyle: StylePropType
};
