import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Colors from "../constants/MyColors";
import Sizes from "../constants/Sizes";

const CHECK_BOX_SIZE = Sizes.s16;

export interface CheckBoxProps {
  value?: boolean;
}

export default function CheckBox({ value = false }: CheckBoxProps) {
  return (
    <View
      style={{
        width: CHECK_BOX_SIZE,
        height: CHECK_BOX_SIZE,
        borderColor: Colors.biscay,
        borderWidth: Sizes.borderWidth,
        alignItems: "center",
        backgroundColor: value ? Colors.biscay : undefined,
      }}
    >
      <MaterialCommunityIcons
        name="check"
        size={CHECK_BOX_SIZE}
        color={Colors.white}
      />
    </View>
  );
}
