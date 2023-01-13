import React from "react";
import { FontRes } from "../hooks/useCachedResources";
import { TextProps, Text } from "react-native";

export function ParisText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: Object.keys(FontRes)[1] }, props.style]}
    />
  );
}

export function MateText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        { fontFamily: Object.keys(FontRes)[2], color: "white" },
        props.style,
      ]}
    />
  );
}
