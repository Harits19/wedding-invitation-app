import React from "react";
import { ViewProps, View } from "react-native";
import Sizes from "../constants/Sizes";

export default function ScaffoldView({ style, ...props }: ViewProps) {
  return (
    <View
      style={[
        {
          maxWidth: Sizes.maxWidth,
          alignSelf: "center",
          overflow: "hidden",
          backgroundColor: "white",
        },
        style,
      ]}
      {...props}
    ></View>
  );
}
