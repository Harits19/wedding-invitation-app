import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { baseHeight, baseWidth } from "../constants/Layout";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function SmallView(props: ViewProps) {
  const { width, height } = useWindowDimensions();

  return (
    <View
      {...props}
      style={[
        styles.view,
        {
          maxWidth: baseWidth,
          maxHeight: baseHeight,
          width: width,
          height: height,
        },
        props.style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  view: {
    alignSelf: "center",
    overflow: "hidden",
    backgroundColor: Colors.white,
  },
});
