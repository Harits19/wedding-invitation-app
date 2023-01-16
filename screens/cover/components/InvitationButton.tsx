import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, PressableProps, View } from "react-native";
import BouncingView from "../../../components/BouncingView";
import { MateText } from "../../../components/StyledText";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";

export default function InvitationButton(props: PressableProps) {
  return (
    <Pressable {...props}>
      <BouncingView
        style={[
          {
            backgroundColor: Colors.biscay,
            padding: Sizes[8],
            borderRadius: Sizes[16],
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <MaterialIcons name="mail" color={"white"} />
        <View style={{ width: Sizes[8] }} />
        <MateText>Buka Undangan</MateText>
      </BouncingView>
    </Pressable>
  );
}
