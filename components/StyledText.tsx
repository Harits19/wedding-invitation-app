import React from "react";
import { TextProps, Text } from "react-native";
import { Colors } from "../constants/Colors";
import { FontResV3 } from "../hooks/useCachedResources";

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
          fontFamily: FontResV3.parisienne.name,
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
          fontFamily: FontResV3.mate.name,
          color: props.type === "light" ? Colors.biscay : "white",
        },
        props.style,
      ]}
    />
  );
}
