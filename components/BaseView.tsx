import React from "react";
import { View, ViewProps } from "react-native";
import { baseHeight, baseWidth } from "../constants/Layout";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function BaseView({ style, ...props }: ViewProps) {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={[
        {
          width: width,
          height: height,
          maxWidth: baseWidth,
          maxHeight: baseHeight,
          backgroundColor: "yellow",
          alignSelf: "center",
          overflow: "hidden",
        },
        style,
      ]}
      {...props}
    ></View>
  );
}
