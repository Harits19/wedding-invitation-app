import {
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { background1 } from "../../assets/images";
import BaseView from "../../components/BaseView";
import { MateText, ParisText } from "../../components/StyledText";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import InvitationButton from "./components/InvitationButton";

export default function OnboardingScreen() {
  const radius = 1000;
  const borderBottom = radius / 2;
  const { width, height } = useWindowDimensions();
  return (
    <BaseView style={{ backgroundColor: Colors.biscay }}>
      <View
        style={{
          flex: 5,
          width: radius,
          height: radius,
          backgroundColor: "grey",
          borderBottomLeftRadius: borderBottom,
          borderBottomRightRadius: borderBottom,
          alignSelf: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          source={background1}
          style={{
            width: width,
            height: height,
            position: "absolute",
            zIndex: 2,
          }}
        />
        <View
          style={{
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 3,
            paddingVertical: Sizes[56],
          }}
        >
          <ParisText style={{ color: "white", fontSize: Sizes[48] }}>
            AF
          </ParisText>
          <MateText style={{ color: "white", fontSize: Sizes[32] }}>
            Name 1 & Name 2
          </MateText>
          <MateText style={{ color: "white", fontSize: Sizes[24] }}>
            25.01.2027
          </MateText>
          <View style={{ flex: 1 }} />
          <InvitationButton onPress={() => console.log("press")} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.biscay,
          justifyContent: "center",
        }}
      >
        <View style={styles.bottomText}>
          <MateText>Create with </MateText>
          <MaterialIcons name="7mp" color={Colors.white} />
        </View>
        <View style={styles.bottomText}>
          <MateText>2027 Name1&Name2. All Right Reserved</MateText>
        </View>
      </View>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
