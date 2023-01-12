import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Image, ScrollView } from "react-native";
import AudioAssets from "../../assets/audio/AudioAssets";
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
  const [audio] = useState(new Audio(AudioAssets.backgroundAudio));
  const [isPlaying, setIsPlaying] = useState(true);
  const toggleAudio = () => {
    audio.paused ? audio.play() : audio.pause();
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    console.log("play audio");
    audio.play();
  }, []);
  return (
    <View>
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
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
              diantaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.
            </MateText>
            <View style={{ height: Sizes[8] }} />
            <MateText style={{ fontWeight: "600", textAlign: "center" }}>
              (QS. Ar-Rum: 21)
            </MateText>
          </View>
        </View>

        <MateText>Bride Screen</MateText>
      </ScrollView>
      <View>
        <MaterialCommunityIcons
          name={!isPlaying ? "play-circle" : "pause-circle"}
          size={40}
          color={"yellow"}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            margin: 16,
          }}
          onPress={toggleAudio}
        />
      </View>
    </View>
  );
}
