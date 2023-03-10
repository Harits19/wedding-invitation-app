import React from "react";
import { View } from "react-native";
import Colors from "../constants/MyColors";
import Sizes from "../constants/Sizes";
import { withOpacity } from "../utils/ColorsUtil";

export default function Divider() {
  return (
    <View
      style={{
        height: Sizes.borderWidth,
        width: "100%",
        backgroundColor: withOpacity(Colors.black, 0.2),
      }}
    />
  );
}
