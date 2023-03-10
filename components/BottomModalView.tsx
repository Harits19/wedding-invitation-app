import React from "react";
import {
  Modal,
  ModalProps,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import { MyViewProps } from "../models/MyViewProps";
import showLog from "../ShowLog";
import { MateText } from "./StyledText";

export interface BottomModalViewProps extends ModalProps {
  onPressBackdrop?: () => void;
}

export default function BottomModalView(props: BottomModalViewProps) {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <Modal {...props} animationType="fade" transparent={true}>
        <TouchableOpacity
          style={{
            width,
            height,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        />
      </Modal>
      <Modal {...props} animationType="slide" transparent={true}>
        <Pressable
          onPress={props.onPressBackdrop}
          style={{ flex: 1, ...removeOutline }}
        />
        {props.children}
      </Modal>
    </View>
  );
}

const removeOutline: MyViewProps = {
  outlineStyle: 'none'
}