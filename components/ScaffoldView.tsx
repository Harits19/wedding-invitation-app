import React from "react";
import { ViewProps, View, useWindowDimensions } from "react-native";
import Sizes from "../constants/Sizes";
import { MateText } from "./StyledText";

export default function ScaffoldView({ style, ...props }: ViewProps) {
  const { width } = useWindowDimensions();
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
