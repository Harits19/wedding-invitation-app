import { Entypo, EvilIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import Carousel from "../../../components/Carousel";
import { MateText, ParisText } from "../../../components/StyledText";
import TopCircleView from "../../../components/TopCircleView";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import UrlUtil from "../../../utils/UrlUtil";

export default function BrideView() {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ height: 500 }}>
        <TopCircleView>
          <Carousel />
        </TopCircleView>
      </View>
      <View style={{ margin: Sizes.s24, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: Colors.biscay,
            borderRadius: Sizes.s8,
            padding: Sizes.s24,
          }}
        >
          <MateText style={{ textAlign: "center" }}>
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </MateText>
          <View style={{ height: Sizes.s8 }} />
          <MateText style={{ fontWeight: "600", textAlign: "center" }}>
            (QS. Ar-Rum: 21)
          </MateText>
        </View>
        <View style={{ height: Sizes.s16 }} />
        <MateText
          type="light"
          style={{ textAlign: "center", fontSize: Sizes.s16 }}
        >
          Kepada Bapak/Ibu/Saudara/i,{"\n"}Haris
        </MateText>
        <View style={{ height: Sizes.s8 }} />
        <MateText
          type="light"
          style={{ textAlign: "center", fontSize: Sizes.s16 }}
        >
          Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami
          memohon kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami:
        </MateText>
        <View style={{ height: Sizes.s16 }} />
        <BrideSection
          nickName="Fulan"
          fullName="Fulan S.Kom"
          fatherName="H. Father"
          motherName="Hj. Mother"
          instagramAccount="abd.harits19"
        />
        <View style={{ height: Sizes.s56 }} />
        <BrideSection
          nickName="Fulanah"
          fullName="Fulanah S.Kom"
          fatherName="H. Father"
          motherName="Hj. Mother"
          instagramAccount="abd.harits19"
        />
        <View style={{ height: Sizes.s56 }} />
      </View>
    </View>
  );
}

const BrideSection = (props: {
  nickName: string;
  fullName: string;
  motherName: string;
  fatherName: string;
  instagramAccount: string;
}) => {
  const imageSize = 240;
  return (
    <>
      <View style={{ height: Sizes.s16 }} />
      <ParisText style={{ fontSize: Sizes.s48 }}>{props.nickName}</ParisText>
      <MateText type="light" style={{ fontSize: Sizes.s24 }}>
        {props.fullName}
      </MateText>
      <View style={{ height: Sizes.s8 }} />
      <MateText
        type="light"
        style={{ fontSize: Sizes.s16, textAlign: "center" }}
      >
        Putra dari Bapak {props.fatherName} , Dan Ibu {props.motherName}
      </MateText>
      <View style={{ height: Sizes.s8 }} />
      <Entypo
        name="instagram-with-circle"
        size={Sizes.s32}
        onPress={() => {
          UrlUtil.openNewTab(
            `https://www.instagram.com/${props.instagramAccount}/`
          );
        }}
        color={Colors.biscay}
      />
      <View style={{ height: Sizes.s32 }} />
      <Image
        style={{
          width: 160,
          height: imageSize,
          borderRadius: imageSize / 3,
        }}
        source={ImageAssets.background1}
      />
    </>
  );
};
