import React from "react";
import { TextInput, TextInputProps } from "react-native";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import { FontRes } from "../hooks/useCachedResources";

export default function MyTextInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={{
        backgroundColor: Colors.anzac,
        padding: Sizes.s12,
        fontSize: Sizes.s16,
        color: Colors.white,
        fontFamily: Object.keys(FontRes)[2],
      }}
    />
  );
}
