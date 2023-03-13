import React from "react";
import { StyleSheet, TextProps, TextStyle, View } from "react-native";
import Colors from "../constants/MyColors";
import { MateText } from "./StyledText";

export default function CopyRightView({
  color = "dark",
  ...props
}: TextStyle & {
  color?: ColorModel;
}) {
  const fontColor: TextStyle = {
    color: color === "light" ? Colors.biscay : undefined,
    textAlign: "center",
    ...props,
  };
  return (
    <>
      <MateText style={fontColor}>
        Create with Love {"\n"}
        2027 Name1&Name2. All Right Reserved
      </MateText>
    </>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
