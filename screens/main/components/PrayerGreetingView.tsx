import React from "react";
import { Image, ScrollView, useWindowDimensions, View } from "react-native";
import WavyBackground from "react-native-wavy-background";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import IconView from "../../../components/IconView";
import MyImage from "../../../components/MyImage";
import MyTextInput from "../../../components/MyTextInput";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText, ParisText } from "../../../components/StyledText";
import Colors from "../../../constants/MyColors";
import Sizes from "../../../constants/Sizes";
import { withOpacity } from "../../../utils/ColorsUtil";
import MessageView from "./MessageView";
import PrimaryButtonView from "./PrimaryButtonView";

export default function PrayerGreetingView() {
  const { height } = useWindowDimensions();

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
              <MessageView
                name="Harits"
                message="Happy Wedding SAMAWA dunia dan akhiraat.. I wish yang terbaik buat keluarga kalian.. Cepet dapet momongan aamiin😇😇sorry aku dateng online yaakk.. Ditunggu kabar baik dari kalian mengenai buah hati junior🤣🤣🤣"
              />
            ))}
          </ScrollView>
        </View>
      </MyImage>
      <View style={{ height: HEIGHT_WAVE }}>
        <Wave move={1} />
        <Wave move={1.5} />
        <Wave move={2} opacity={1} />
      </View>

      <View
        style={{
          width: "100%",
          backgroundColor: WAVE_COLOR,
          padding: Sizes.s32,
          alignItems: "center",
        }}
      >
        <MateText
          style={{
            color: Colors.biscay,
            fontSize: Sizes.s16,
            textAlign: "center",
          }}
        >
          Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
          berkenan hadir dalam hari bahagia kami. Terima kasih atas segala
          ucapan, doa, dan perhatian yang diberikan. Kami mengharap pengertian
          Anda atas semua pemberlakuan protokol kesehatan di hari pernikahan.
          Sampai jumpa di hari bahagia kami!
        </MateText>
        <View style={{ height: Sizes.s32 }} />
        <Image
          source={ImageAssets.background1}
          resizeMode="cover"
          style={{
            width: "80%",
            borderRadius: Sizes.s16,
            height: 480,
          }}
        />
        <View style={{ height: Sizes.s32 }} />
        <ParisText style={{ color: Colors.biscay, fontSize: Sizes.s32 }}>
          With Love
        </ParisText>
        <IconView color={"light"} />
      </View>
      <FooterView />
    </ScaffoldView>
  );
}

const HEIGHT_WAVE = 200;
const WAVE_COLOR = Colors.white;

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
        width={1500}
        amplitude={Sizes.s16}
        frequency={1 / move}
        offset={150}
        color={withOpacity(WAVE_COLOR, opacity)}
        bottom
      />
    </View>
  );
};

const FooterView = () => {
  const SIZE = 1500;
  const COLOR = Colors.biscay;
  const FooterWave = () => {
    return (
      <View
        style={{
          backgroundColor: COLOR,
          height: 80,
          overflow: "hidden",
          transform: [{ rotateX: "180deg" }],
        }}
      >
        <View
          style={{
            backgroundColor: WAVE_COLOR,
            height: SIZE,
            width: SIZE,
            alignSelf: "center",
            borderRadius: SIZE,
          }}
        />
      </View>
    );
  };
  return (
    <View>
      <FooterWave />
      <View
        style={{
          backgroundColor: COLOR,
          padding: Sizes.s32,
          justifyContent: "center",
        }}
      >
        <ParisText style={{ color: Colors.white, textAlign: "center" }}>
          Created with Love by,
        </ParisText>
        <View style={{ height: Sizes.s16 }} />
        <MateText style={{ textAlign: "center" }}>
          © 2023 Fulan & Fulan. All Rights Reserved {"\n"}Song by Yovie & Nuno -
          Janji Suci
        </MateText>
      </View>
    </View>
  );
};
