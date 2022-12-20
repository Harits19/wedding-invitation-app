import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

export default function TopCircleView(props: ViewProps) {
  return <View style={styles.onboarding}>{props.children}</View>;
}

const radius = 1000;
const borderBottom = radius / 2;

const styles = StyleSheet.create({
  onboarding: {
    flex: 10,
    width: radius,
    height: radius,
    backgroundColor: "grey",
    borderBottomLeftRadius: borderBottom,
    borderBottomRightRadius: borderBottom,
    alignSelf: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
