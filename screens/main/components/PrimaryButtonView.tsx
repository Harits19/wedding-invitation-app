import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";

export type PrimaryButtonViewProps = ViewProps &
  TouchableOpacityProps & {
    size?: 8 | 12;
  };

export default function PrimaryButtonView({
  size = 8,
  ...props
}: PrimaryButtonViewProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          backgroundColor: Colors.anzac,
          borderRadius: Sizes.s8,
          paddingHorizontal: Sizes.s8,
          paddingVertical: size,
          alignItems: "center",
        },
        props.style,
      ]}
    />
  );
}
