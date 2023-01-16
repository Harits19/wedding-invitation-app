import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useWindowDimensions, View } from "react-native";
import BouncingView from "../../../components/BouncingView";
import IconView from "../../../components/IconView";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText, ParisText } from "../../../components/StyledText";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";

export default function EventView() {
  const { height } = useWindowDimensions();
  return (
    <ScaffoldView
      style={{
        alignItems: "center",
        backgroundColor: Colors.biscay,
        padding: Sizes[40],
        height,
        justifyContent: "center",
      }}
    >
      <IconView />
      <View style={{ height: Sizes[16] }} />
      <MateText style={{ fontSize: Sizes[24], textAlign: "center" }}>
        “When we fall in love,{"\n"}it will be forever”
      </MateText>
      <View style={{ height: Sizes[32] }} />
      <View
        style={{
          backgroundColor: Colors.linkWater,
          borderRadius: Sizes[16],
          padding: Sizes[16],
        }}
      >
        <View
          style={{
            backgroundColor: Colors.white,
            padding: Sizes[24],
            borderRadius: Sizes[16],
            alignItems: "center",
          }}
        >
          <ParisText style={{ fontSize: Sizes[32], textAlign: "center" }}>
            Resepsi{"\n"}Pernikahan
          </ParisText>
          <View style={{ height: 16 }} />
          <MateText type="light" style={{ textAlign: "center" }}>
            Minggu{"\n"}
            11 Desember 2022{"\n"}
            11.00 - 12.00 WIB{"\n"}
            {"\n"}
            Dresscode{"\n"}
            Blue, White{"\n"}
            {"\n"}
            Lava Hill Resort
          </MateText>
          <MateText type="light" style={{ fontSize: 14, textAlign: "center" }}>
            Dusun 1, Sapikerep, Sukapura, Probolinggo
          </MateText>
          <View style={{ height: 16 }} />
          <View style={{ flexDirection: "row" }}>
            <Button name="calendar-today" text="Ingatkan Saya" />
            <View style={{ width: Sizes[8] }} />
            <Button name="location-pin" text="Lihat Peta" />
          </View>
        </View>
      </View>
    </ScaffoldView>
  );
}

const Button = (props: { name: MaterialIconsNameModel; text: string }) => (
  <BouncingView
    maxScale={1.05}
    style={{
      flexDirection: "row",
      alignItems: "center",
      padding: Sizes[4],
      backgroundColor: Colors.biscay,
      borderRadius: Sizes[4],
    }}
  >
    <MaterialIcons name={props.name} color={Colors.white} />
    <View style={{ width: Sizes[4] }} />
    <MateText style={{ fontSize: Sizes[12] }}>{props.text}</MateText>
  </BouncingView>
);
