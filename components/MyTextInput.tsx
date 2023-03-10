import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import Colors from "../constants/MyColors";
import Sizes from "../constants/Sizes";
import { FontRes } from "../hooks/useCachedResources";
import { withOpacity } from "../utils/ColorsUtil";

export type MyTextInputProps = TextInputProps;

export default function MyTextInput(props: MyTextInputProps) {
  const [focus, setFocus] = useState(false);
  return (
    <TextInput
      {...props}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={[styles.input, !focus && styles.unFocus, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.anzac,
    padding: Sizes.s12,
    fontSize: Sizes.s16,
    color: Colors.white,
    fontFamily: Object.keys(FontRes)[2],
    borderRadius: Sizes.s4,
    outlineStyle: "none",
  },
  unFocus: {
    shadowRadius: Sizes.s4,
    shadowColor: withOpacity(Colors.biscay, 0.4),
  },
});
