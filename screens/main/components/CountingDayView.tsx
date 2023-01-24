import React from "react";
import { Image, View } from "react-native";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText, ParisText } from "../../../components/StyledText";
import Colors from "../../../constants/Colors";

export default function CountingDayView() {
  return (
    <ScaffoldView
      style={{
        backgroundColor: Colors.biscay,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderRadius: 16,
          backgroundColor: "white",
          alignSelf: "stretch",
          marginHorizontal: 24,
        }}
      >
        <Image
          source={ImageAssets.background1}
          style={{
            height: 240,
            width: "100%",
            borderRadius: 16,
          }}
        />
        <View style={{ height: 42 }} />
        <View style={{ marginHorizontal: 16 }}>
          <ParisText
            style={{ fontSize: 48, color: Colors.anzac, textAlign: "center" }}
          >
            Counting{"\n"}Days
          </ParisText>
          <View style={{ height: 16 }} />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {["Hari", "Jam", "Menit", "Detik"].map((e) => (
              <View
                style={{
                  borderRadius: 16,
                  backgroundColor: Colors.bigStone,
                  paddingVertical: 8,
                  paddingHorizontal: 4,
                  width: 60,
                  height: 65,
                  alignItems: "center",
                  marginHorizontal: 4,
                }}
              >
                <MateText style={{ fontSize: 24 }}>0</MateText>
                <MateText style={{ fontSize: 12 }}>{e}</MateText>
              </View>
            ))}
          </View>
          <View style={{ height: 16 }} />
        </View>
        <View style={{ height: 24 }} />
      </View>
    </ScaffoldView>
  );
}
