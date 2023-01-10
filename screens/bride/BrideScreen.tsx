import React from "react";
import { View, Image, ScrollView } from "react-native";
import { ImageAssets } from "../../assets/images/ImageAssets";
import Carousel from "../../components/Carousel";
import SmallView from "../../components/SmallView";
import { MateText } from "../../components/StyledText";
import { Text } from "../../components/Themed";
import TopCircleView from "../../components/TopCircleView";
import WindowView from "../../components/WindowView";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function BrideScreen() {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View style={{ height: 500 }}>
        <TopCircleView>
          <Carousel />
        </TopCircleView>
      </View>
      <View style={{ margin: Sizes[24] }}>
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
      </View>

      <MateText>Bride Screen</MateText>
    </ScrollView>
  );
}
