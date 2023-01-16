import React from "react";
import { FontRes } from "../hooks/useCachedResources";
import { TextProps, Text } from "react-native";
import Colors from "../constants/Colors";

export function ParisText(
  props: TextProps & {
    type?: ColorModel;
  }
) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: Object.keys(FontRes)[1],
          color: props.type === "dark" ? "white" : Colors.biscay,
        },
        props.style,
      ]}
    />
  );
}

export function MateText(
  props: TextProps & {
    type?: ColorModel;
  }
) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: Object.keys(FontRes)[2],
          color: props.type === "light" ? Colors.biscay : "white",
        },
        props.style,
      ]}
    />
  );
}
