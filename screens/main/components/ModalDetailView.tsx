import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import BottomModalView, {
  BottomModalViewProps,
} from "../../../components/BottomModalView";
import { ParisText } from "../../../components/StyledText";
import Colors from "../../../constants/MyColors";
import Sizes from "../../../constants/Sizes";

export default function ModalDetailView(
  props: BottomModalViewProps & {
    title: string;
  }
) {
  return (
    <BottomModalView {...props}>
      <View style={{ backgroundColor: Colors.white }}>
        <View
          style={{
            padding: Sizes.s16,
            borderBottomWidth: Sizes.borderWidth,
            borderColor: Colors.geyser,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ParisText
            style={{
              color: Colors.anzac,
              fontSize: Sizes.s32,
            }}
          >
            {props.title}
          </ParisText>
          <TouchableOpacity onPress={props.onPressBackdrop}>
            <MaterialCommunityIcons
              name="close"
              size={Sizes.s24}
              color={Colors.anzac}
            />
          </TouchableOpacity>
        </View>

        <View style={{ padding: Sizes.s32 }}>{props.children}</View>
      </View>
    </BottomModalView>
  );
}
