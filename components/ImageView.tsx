import React from "react";
import { Image, ImageProps, StyleSheet, View, ViewStyle } from "react-native";

export type ImageViewProps = ImageProps & {
  children?: React.ReactNode;
};

export default function ImageView({
  children,
  style,
  source,
  ...props
}: ImageViewProps) {
  return (
    <View>
      <Image source={source} {...props} style={[styles.body, style]} />
      <View style={{ zIndex: 1 }}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
