import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import WavyBackground from "react-native-wavy-background";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import MyImage from "../../../components/MyImage";
import MyTextInput from "../../../components/MyTextInput";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText, ParisText } from "../../../components/StyledText";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import { withOpacity } from "../../../utils/ColorsUtil";
import PrimaryButtonView from "./PrimaryButtonView";

export default function PrayerGreetingView() {
  const { height, width } = useWindowDimensions();

  const HEIGHT_WAVE = 200;

  const Wave = ({
    move = 1,
    opacity = 0.5,
    ...props
  }: {
    opacity?: number;
    move?: number;
  }) => {
    return (
      <View style={{ position: "absolute", right: 0, left: 0 }}>
        <WavyBackground
          height={HEIGHT_WAVE}
          width={width}
          amplitude={Sizes.s16}
          frequency={1 / move}
          offset={150}
          color={withOpacity(Colors.biscay, opacity)}
          bottom
        />
      </View>
    );
  };

  return (
    <ScaffoldView>
      <MyImage
        source={ImageAssets.background3}
        style={{ padding: Sizes.s32, height: height + height / 4 }}
      >
        <View style={{ padding: Sizes.s32 }}>
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
          <ScrollView
            style={{ height: 400 }}
            // contentContainerStyle={{ paddingRight: Sizes.s16 }}
          >
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((e) => (
              <Message
                name="Harits"
                message="Happy Wedding SAMAWA dunia dan akhiraat.. I wish yang terbaik buat keluarga kalian.. Cepet dapet momongan aamiin😇😇sorry aku dateng online yaakk.. Ditunggu kabar baik dari kalian mengenai buah hati junior🤣🤣🤣"
              />
            ))}
          </ScrollView>
        </View>
        <View style={{ height: HEIGHT_WAVE }}>
          <Wave move={1} />
          <Wave move={1.5} />
          <Wave move={2} opacity={1} />
        </View>

        <View
          style={{
            height: 1000,
            width: "100%",
            backgroundColor: Colors.biscay,
          }}
        ></View>
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
