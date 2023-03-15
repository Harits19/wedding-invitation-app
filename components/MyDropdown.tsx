import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import Sizes from "../constants/Sizes";
import BottomModalView from "./BottomModalView";
import Divider from "./MyDivider";
import MyTextInput, { MyTextInputProps } from "./MyTextInput";
import { MateText } from "./StyledText";

export type MyDropdownItem<T> = {
  value: T;
  text: string;
};

export interface MyDropdownProps<T> {
  items: MyDropdownItem<T>[];
  label?: string;
  onChangeValue?: (value: T) => void;
  value?: T;
}

const BORDER_TOP = Sizes.s16;
export default function MyDropdown<T>({
  items,
  onChangeValue,
  value,
  ...props
}: MyDropdownProps<T>) {
  const [modal, setModal] = useState(false);
  const selectedDropdown = items.find(
    (e) => JSON.stringify(e.value) === JSON.stringify(value)
  );
  const label = (
    <>
      <MateText style={{ color: Colors.anzac }}>{props.label}</MateText>
      <View style={{ height: Sizes.s8 }} />
    </>
  );
  return (
    <View>
      {props.label && label}
      <TouchableOpacity onPress={() => setModal(true)}>
        <MyTextInput pointerEvents="none" value={selectedDropdown?.text} />
      </TouchableOpacity>
      <BottomModalView visible={modal} onPressBackdrop={() => setModal(false)}>
        <View
          style={{
            backgroundColor: Colors.white,
            padding: Sizes.s16,
            borderTopRightRadius: BORDER_TOP,
            borderTopLeftRadius: BORDER_TOP,
          }}
        >
          {label}
          <View style={{ height: Sizes.s8 }} />
          <Divider />
          <View style={{ height: Sizes.s16 }} />
          {items.map((e, index) => (
            <TouchableOpacity
              onPress={() => {
                onChangeValue && onChangeValue(e.value);
                setModal(false);
              }}
              key={index}
              style={{
                padding: Sizes.s8,
                backgroundColor: Colors.anzac,
                marginBottom: Sizes.s8,
                borderRadius: Sizes.s8,
              }}
            >
              <MateText key={index}>{e.text}</MateText>
            </TouchableOpacity>
          ))}
        </View>
      </BottomModalView>
    </View>
  );
}
