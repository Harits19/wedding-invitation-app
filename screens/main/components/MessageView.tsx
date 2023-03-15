import React from "react";
import { View } from "react-native";
import { MateText } from "../../../components/StyledText";
import { Colors } from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";

const MessageView = ({
  name,
  message,
  ...props
}: {
  name: string;
  message: string;
}) => {
  const SIZE = Sizes.s40;
  const BORDER_RADIUS = Sizes.s16;
  return (
    <View style={{ flexDirection: "row", padding: Sizes.s8 }}>
      <View
        style={{
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          backgroundColor: Colors.anzac,
          borderWidth: Sizes.s4,
          borderColor: Colors.white,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MateText>{name[0].toUpperCase()}</MateText>
      </View>
      <View style={{ width: Sizes.s8 }} />
      <View
        style={{
          backgroundColor: Colors.white,
          padding: Sizes.s16,
          flex: 1,
          borderTopRightRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
          borderBottomLeftRadius: BORDER_RADIUS,
        }}
      >
        <MateText style={{ color: Colors.anzac }}>{name}</MateText>
        <View style={{ height: Sizes.s8 }} />
        <MateText style={{ color: Colors.biscay }}>{message}</MateText>
      </View>
    </View>
  );
};

export default MessageView;
