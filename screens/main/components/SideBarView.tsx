import React, { useEffect, useRef } from "react";
import {
  Modal,
  View,
  ModalProps,
  Pressable,
  Animated,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CopyRightView from "../../../components/CopyrightView";
import IconView from "../../../components/IconView";
import { MateText } from "../../../components/StyledText";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";

export default function SideBarView({
  items,
  onPressMenu,
  onRequestClose,
  ...props
}: ModalProps & {
  items: string[];
  onRequestClose: () => void;
  onPressMenu: ({ index, value }: { index: number; value: string }) => void;
}) {
  const { width } = useWindowDimensions();
  const translateX = useRef(new Animated.Value(width)).current;
  const modalVisible = props.visible;
  const duration = 500;

  useEffect(() => {
    console.log({ modalVisible });

    if (modalVisible) {
      Animated.timing(translateX, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      }).start();
      return;
    }
    Animated.timing(translateX, {
      toValue: width,
      useNativeDriver: false,
      duration,
    }).start();
  }, [modalVisible]);

  return (
    <Modal
      {...props}
      animationType="fade"
      onRequestClose={onRequestClose}
      transparent={true}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            opacity: 0.25,
            position: "absolute",
            ...styles.fill,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "stretch",
            flex: 1,
            ...styles.fill,
          }}
        >
          <Pressable style={{ flex: 1 }} onPress={onRequestClose}></Pressable>
          <Animated.View
            style={{
              backgroundColor: "white",
              flex: 3,
              padding: 32,
              transform: [
                {
                  translateX: translateX,
                },
              ],
            }}
          >
            <IconView color="light" />
            <View style={{ height: Sizes.s32 }} />
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  onPressMenu({ index, value: item });
                  onRequestClose && onRequestClose();
                }}
              >
                <MateText
                  style={{
                    fontSize: 16,
                    margin: 16,
                    color: Colors.biscay,
                    textAlign: "right",
                  }}
                >
                  {item}
                </MateText>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.biscay,
                    opacity: 0.25,
                  }}
                />
              </TouchableOpacity>
            ))}
            <View style={{ flex: 1 }} />
            <CopyRightView color="light" textAlign="right" />
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fill: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
