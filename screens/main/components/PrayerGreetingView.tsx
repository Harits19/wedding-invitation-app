import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import MyImage from "../../../components/MyImage";
import MyTextInput from "../../../components/MyTextInput";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText, ParisText } from "../../../components/StyledText";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import PrimaryButtonView from "./PrimaryButtonView";

export default function PrayerGreetingView() {
  const { height } = useWindowDimensions();
  return (
    <ScaffoldView>
      <MyImage source={ImageAssets.background3} style={{ padding: Sizes.s32 }}>
        <View style={{ padding: Sizes.s32, height }}>
          <ParisText
            style={{
              fontSize: Sizes.s32,
              color: Colors.white,
              textAlign: "center",
            }}
          >
            Doa & Ucapan
          </ParisText>
          <View style={{ height: Sizes.s16 }} />
          <MateText style={{ textAlign: "center" }}>
            Silakan kirimkan doa dan ucapan{"\n"}yang tulus untuk kami:
          </MateText>
          <View style={{ height: Sizes.s24 }} />
          <MyTextInput
            placeholder="Nama Anda"
            style={{ backgroundColor: Colors.white, color: Colors.biscay }}
          />
          <View style={{ height: Sizes.s8 }} />
          <MyTextInput
            placeholder="Doa & Ucapan"
            style={{ backgroundColor: Colors.white, color: Colors.biscay }}
          />
          <View style={{ height: Sizes.s16 }} />
          <PrimaryButtonView>
            <MateText>Kirim</MateText>
          </PrimaryButtonView>
          <View style={{ height: Sizes.s32 }} />
          <ScrollView style={{ flex: 1, flexShrink: 1 }}>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((e) => (
              <Message
                name="Harits"
                message="Happy Wedding SAMAWA dunia dan akhiraat.. I wish yang terbaik buat keluarga kalian.. Cepet dapet momongan aamiin😇😇sorry aku dateng online yaakk.. Ditunggu kabar baik dari kalian mengenai buah hati junior🤣🤣🤣"
              />
            ))}
          </ScrollView>
        </View>
      </MyImage>
    </ScaffoldView>
  );
}

const Message = ({
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
