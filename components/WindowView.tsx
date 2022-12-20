import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function WindowView(props: ViewProps) {
  const { width, height } = useWindowDimensions();
  return (
    <View
      {...props}
      style={[styles.view, { width: width, height: height }, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  view: {
    alignSelf: "center",
    overflow: "hidden",
  },
});
