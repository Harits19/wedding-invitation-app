import React from "react";
import { Image, ImageProps, StyleSheet, View, ViewStyle } from "react-native";

export type MyImageProps = ImageProps & {
  children?: React.ReactNode;
};

export default function MyImage({
  children,
  style,
  source,
  ...props
}: MyImageProps) {
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
