import PropTypes from "prop-types";
import * as React from "react";
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { StylePropType } from "../utils";

const DEFAULT_AVATAR_IMAGE_SIZE = 32;

type Props = ImageProps & {
  /**
   * Image to display for the `Avatar`.
   */
  source: ImageSourcePropType;
  /**
   * Size of the avatar.
   */
  size?: number;
  /**
   * style of the image wrapper
   */
  style?: StyleProp<ViewStyle>;
  /**
   * style of the image
   */
  imageStyle?: StyleProp<ImageStyle>;
  /**
   * background color of the image wrapper
   */
  backgroundColor?: string;
};

function AvatarImage({
  source,
  size = DEFAULT_AVATAR_IMAGE_SIZE,
  style,
  imageStyle,
  backgroundColor,
  ...imageProps
}: Props) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
        style,
      ]}>
      <Image
        source={source}
        style={[
          { width: size, height: size, borderRadius: size / 2 },
          imageStyle,
        ]}
        {...imageProps}
      />
    </View>
  );
}

export default AvatarImage;

AvatarImage.propTypes = {
  source: PropTypes.object,
  size: PropTypes.number,
  style: StylePropType,
  imageStyle: StylePropType,
  backgroundColor: PropTypes.string,
};

AvatarImage.displayName = "Avatar.Image";
