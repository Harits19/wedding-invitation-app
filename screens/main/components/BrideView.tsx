import { Entypo, EvilIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import CarouselView from "../../../components/CarouselView";
import { MateText, ParisText } from "../../../components/StyledText";
import TopCircleView from "../../../components/TopCircleView";
import { Colors } from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import { openNewTab } from "../../../utils/UrlUtil";
import BrideSectionView from "./BrideSectionView";

export default function BrideView() {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ height: 500 }}>
        <TopCircleView>
          <CarouselView />
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
        <View style={{ height: Sizes.s24 }} />
        <MateText
          type="light"
          style={{ textAlign: "center", fontSize: Sizes.s16 }}
        >
          Kepada Bapak/Ibu/Saudara/i,
        </MateText>
        <View style={{ height: Sizes.s8 }} />
        <MateText
          type="light"
          style={{ textAlign: "center", fontSize: Sizes.s16 }}
        >
          Haris
        </MateText>
        <View style={{ height: Sizes.s8 }} />
        <MateText
          type="light"
          style={{ textAlign: "center", fontSize: Sizes.s16 }}
        >
          Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami
          memohon kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami:
        </MateText>
        <View style={{ height: Sizes.s24 }} />
        <BrideSectionView
          nickName="Fulan"
          fullName="Fulan S.Kom"
          fatherName="H. Father"
          motherName="Hj. Mother"
          instagramAccount="abd.harits19"
        />
        <View style={{ height: Sizes.s56 }} />
        <BrideSectionView
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
