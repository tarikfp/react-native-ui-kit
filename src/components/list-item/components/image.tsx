import * as React from "react";
import { Image, ImageProps, ImageStyle, StyleProp } from "react-native";
import { StylePropType } from "../../utils";

export type Props = ImageProps & {
  style?: StyleProp<ImageStyle>;
};

export default function ListItemImage({ style, ...imageProps }: Props) {
  return <Image style={style} {...imageProps} />;
}

ListItemImage.displayName = "ListItem.Image";

ListItemImage.propTypes = {
  style: StylePropType,
};
