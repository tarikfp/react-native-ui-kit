import PropTypes from "prop-types";
import React from "react";
import type { TouchableOpacityProps } from "react-native";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { BaseColors, BaseFonts, BaseShadow } from "../../theme";
import { StylePropType } from "../utils";
import type { IconProps } from "../vector-icons";
import Icon from "../vector-icons";

export type Props = TouchableOpacityProps & {
  /**
   * List item height
   * @default 56
   */
  readonly height?: number;
  /**
   * Left aligned icon
   * @see IconProps
   */
  readonly startIcon?: IconProps;
  /**
   * Right aligned icon
   * @see IconProps
   */
  readonly endIcon?: IconProps;
  /**
   * Left aligned custom element, overrides startIcon
   *
   * ```js
   *  <TextInput
   *     renderStartElement={() => (
   *       <View>
   *         <Image
   *           style={{ width: 30, height: 30 }}
   *           source={{
   *             uri: "customImageUrl",
   *           }}
   *         />
   *       </View>
   *     )}
   *   />
   * }
   * ```
   */
  readonly renderStartElement?: (containerStyle: ViewStyle) => React.ReactNode;
  /**
   * Right aligned custom element, overrides endIcon
   *
   * ```js
   *  <TextInput
   *     renderEndElement={() => (
   *       <View>
   *         <Image
   *           style={{ width: 30, height: 30 }}
   *           source={{
   *             uri: "customImageUrl",
   *           }}
   *         />
   *       </View>
   *     )}
   *   />
   * }
   * ```
   */
  readonly renderEndElement?: (containerStyle: ViewStyle) => React.ReactNode;
  /**
   * Start title subtitle container style
   */
  readonly startTitleSubtitleContainerStyle?: StyleProp<ViewStyle>;
  /**
   * End title subtitle container style
   */
  readonly endTitleSubtitleContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Left aligned title text
   */
  readonly startTitle?: string;
  /**
   * Left aligned title style
   */
  readonly startTitleStyle?: StyleProp<TextStyle>;
  /**
   * Left aligned subtitle style
   */
  readonly startSubtitleStyle?: StyleProp<TextStyle>;
  /**
   * Left aligned subtitle text
   */
  readonly startSubtitle?: string;
  /**
   * Right aligned title text
   */
  readonly endTitle?: string;
  /**
   * Right aligned title style
   */
  readonly endTitleStyle?: StyleProp<TextStyle>;
  /**
   * Right aligned subtitle style
   */
  readonly endSubtitleStyle?: StyleProp<TextStyle>;
  /**
   * Right aligned subtitle text
   */
  readonly endSubtitle?: string;
  /**
   * Applies to shadow to the list item.
   * @default false
   */
  readonly hasShadow?: boolean;
};

function SingleListItem({
  height = 56,
  startIcon,
  endIcon = {
    name: "arrow-right",
    type: "MaterialCommunityIcons",
    size: 26,
    color: BaseColors.textLight
  },
  renderStartElement,
  renderEndElement,
  startTitle,
  startSubtitle,
  endTitle,
  endSubtitle,
  startTitleSubtitleContainerStyle,
  endTitleSubtitleContainerStyle,
  activeOpacity = 0.4,
  hasShadow = false,
  startSubtitleStyle,
  startTitleStyle,
  endSubtitleStyle,
  endTitleStyle,
  style,
  ...touchableOpacityProps
}: Props) {
  const shadowStyle = hasShadow ? BaseShadow : undefined;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={StyleSheet.flatten<ViewStyle>([
        styles.wrapper,
        { height },
        shadowStyle,
        style
      ])}
      {...touchableOpacityProps}>
      {renderStartElement?.(styles.startIcon)}

      {startIcon && renderStartElement === undefined && (
        <Icon
          style={styles.startIcon}
          color={BaseColors.textLight}
          size={26}
          {...startIcon}
        />
      )}

      {(startTitle || startSubtitle) && (
        <View
          style={StyleSheet.flatten<ViewStyle>([
            styles.startTitleSubtitleContainer,
            { height },
            startTitleSubtitleContainerStyle
          ])}>
          {startTitle && (
            <Text
              style={StyleSheet.flatten<TextStyle>([
                BaseFonts.h3,
                startTitleStyle
              ])}>
              {startTitle}
            </Text>
          )}

          {startSubtitle && (
            <Text
              style={StyleSheet.flatten<TextStyle>([
                BaseFonts.p1,
                startSubtitleStyle
              ])}>
              {startSubtitle}
            </Text>
          )}
        </View>
      )}

      {(endTitle || endSubtitle) && (
        <View
          style={StyleSheet.flatten<ViewStyle>([
            styles.endTitleSubtitleContainer,
            { height },
            endTitleSubtitleContainerStyle
          ])}>
          {endTitle && (
            <Text style={StyleSheet.flatten([BaseFonts.h3, endTitleStyle])}>
              {endTitle}
            </Text>
          )}

          {endSubtitle && (
            <Text style={StyleSheet.flatten([BaseFonts.p1, endSubtitleStyle])}>
              {endSubtitle}
            </Text>
          )}
        </View>
      )}

      {renderEndElement?.(styles.endIcon)}

      {endIcon && renderEndElement === undefined && (
        <Icon
          size={16}
          color={BaseColors.textLight}
          style={styles.endIcon}
          {...endIcon}
        />
      )}
    </TouchableOpacity>
  );
}

export default SingleListItem;

SingleListItem.propTypes = {
  height: PropTypes.number,
  startIcon: PropTypes.object,
  endIcon: PropTypes.object,
  renderStartElement: PropTypes.func,
  renderEndElement: PropTypes.func,
  hasShadow: PropTypes.bool,
  startTitleSubtitleContainerStyle: StylePropType,
  endTitleSubtitleContainerStyle: StylePropType,
  startTitle: PropTypes.string,
  startTitleStyle: StylePropType,
  startSubtitleStyle: StylePropType,
  startSubtitle: PropTypes.string,
  endTitle: PropTypes.string,
  endTitleStyle: StylePropType,
  endSubtitleStyle: StylePropType,
  endSubtitle: PropTypes.string
};

interface Styles {
  wrapper: ViewStyle;
  startIcon: TextStyle;
  endIcon: TextStyle;
  startTitleSubtitleContainer: ViewStyle;
  endTitleSubtitleContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    height: 56,
    borderColor: BaseColors.borderColor,
    backgroundColor: BaseColors.lightGrey
  },
  startIcon: {
    paddingRight: 16
  },
  endIcon: {
    paddingLeft: 16
  },
  startTitleSubtitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  endTitleSubtitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
