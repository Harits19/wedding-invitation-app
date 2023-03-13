import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import Colors from "../../../constants/MyColors";
import Sizes from "../../../constants/Sizes";
import PrimaryButtonView from "./PrimaryButtonView";

export default function SecondaryButtonView(props: TouchableOpacityProps) {
  return (
    <PrimaryButtonView
      {...props}
      style={[
        {
          backgroundColor: Colors.white,
          borderColor: Colors.anzac,
          borderWidth: Sizes.s2,
          alignItems: "center",
          justifyContent: "center",
        },
        props.style,
      ]}
    />
  );
}
