import React from "react";
import { View, useWindowDimensions, ViewProps } from "react-native";
import { Colors } from "../constants/Colors";

export default function ScaffoldWindowView(props: ViewProps) {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        backgroundColor: Colors.linkWater,
        height,
        width,
      }}
      {...props}
    />
  );
}
