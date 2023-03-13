import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useWindowDimensions, View } from "react-native";
import BouncingView from "../../../components/BouncingView";
import IconView from "../../../components/IconView";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText, ParisText } from "../../../components/StyledText";
import Colors from "../../../constants/MyColors";
import Sizes from "../../../constants/Sizes";

export default function EventView() {
  return (
    <ScaffoldView
      style={{
        alignItems: "center",
        backgroundColor: Colors.biscay,
        padding: Sizes.s40,
        justifyContent: "center",
      }}
    >
      <IconView />
      <View style={{ height: Sizes.s16 }} />
      <MateText style={{ fontSize: Sizes.s24, textAlign: "center" }}>
        “When we fall in love,{"\n"}it will be forever”
      </MateText>
      <View style={{ height: Sizes.s32 }} />
      <View
        style={{
          backgroundColor: Colors.linkWater,
          borderRadius: Sizes.s16,
          padding: Sizes.s16,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.white,
            padding: Sizes.s24,
            borderRadius: Sizes.s16,
            alignItems: "center",
          }}
        >
          <ParisText style={{ fontSize: Sizes.s32, textAlign: "center" }}>
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
            <View style={{ width: Sizes.s8 }} />
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
      padding: Sizes.s4,
      backgroundColor: Colors.biscay,
      borderRadius: Sizes.s4,
    }}
  >
    <MaterialIcons name={props.name} color={Colors.white} />
    <View style={{ width: Sizes.s4 }} />
    <MateText style={{ fontSize: Sizes.s12 }}>{props.text}</MateText>
  </BouncingView>
);
