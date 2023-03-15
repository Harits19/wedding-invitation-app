import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
import Sizes from "../constants/Sizes";
import BottomModalView from "./BottomModalView";
import DividerView from "./DividerView";
import TextInputView, { TextInputViewProps } from "./TextInputView";
import { MateText } from "./StyledText";

export type DropdownViewItem<T> = {
  value: T;
  text: string;
};

export interface DropdownViewProps<T> {
  items: DropdownViewItem<T>[];
  label?: string;
  onChangeValue?: (value: T) => void;
  value?: T;
}

export default function DropdownView<T>({
  items,
  onChangeValue,
  value,
  ...props
}: DropdownViewProps<T>) {
  const BORDER_TOP = Sizes.s16;

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
        <TextInputView pointerEvents="none" value={selectedDropdown?.text} />
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
          <DividerView />
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
