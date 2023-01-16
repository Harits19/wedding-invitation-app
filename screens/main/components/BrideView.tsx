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
      <View style={{ margin: Sizes[24], alignItems: "center" }}>
        <View
          style={{
            backgroundColor: Colors.biscay,
            borderRadius: Sizes[8],
            padding: Sizes[24],
          }}
        >
          <MateText style={{ textAlign: "center" }}>
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </MateText>
          <View style={{ height: Sizes[8] }} />
          <MateText style={{ fontWeight: "600", textAlign: "center" }}>
            (QS. Ar-Rum: 21)
          </MateText>
        </View>
        <MateText>Kepada Bapak/Ibu/Saudara/i,{"\n"}Haris</MateText>
        <View style={{ height: Sizes[8] }} />
        <MateText>
          Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami
          memohon kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami:
        </MateText>
        <BrideSection
          nickName="Fulan"
          fullName="Fulan S.Kom"
          fatherName="H. Father"
          motherName="Hj. Mother"
          instagramAccount="abd.harits19"
        />
        <View style={{ height: Sizes[56] }} />
        <BrideSection
          nickName="Fulanah"
          fullName="Fulanah S.Kom"
          fatherName="H. Father"
          motherName="Hj. Mother"
          instagramAccount="abd.harits19"
        />
        <View style={{ height: Sizes[56] }} />
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
      <View style={{ height: Sizes[16] }} />
      <ParisText style={{ fontSize: Sizes[48] }}>{props.nickName}</ParisText>
      <MateText type="light" style={{ fontSize: Sizes[24] }}>
        {props.fullName}
      </MateText>
      <View style={{ height: Sizes[8] }} />
      <MateText
        type="light"
        style={{ fontSize: Sizes[16], textAlign: "center" }}
      >
        Putra dari Bapak {props.fatherName} , Dan Ibu {props.motherName}
      </MateText>
      <View style={{ height: Sizes[8] }} />
      <Entypo
        name="instagram-with-circle"
        size={Sizes[32]}
        onPress={() => {
          UrlUtil.openNewTab(
            `https://www.instagram.com/${props.instagramAccount}/`
          );
        }}
        color={Colors.biscay}
      />
      <View style={{ height: Sizes[32] }} />
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
