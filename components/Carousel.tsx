import { useEffect, useRef } from "react";
import { Animated, Image, View } from "react-native";
import { ImageAssets } from "../assets/images/ImageAssets";
import Duration from "../constants/Duration";
import useWindowDimensions from "../hooks/useWindowDimensions";

const items = [
  ImageAssets.background1,
  ImageAssets.background2,
  ImageAssets.background1,
];

export default function Carousel() {
  const opacity = useRef(new Animated.Value(1)).current;
  const { width, height } = useWindowDimensions();

  const runAnimation = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        duration: Duration.animation,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: Duration.animation,
        useNativeDriver: true,
      }),
    ]).start(() => runAnimation());
  };
  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <View>
      <Animated.View style={{ opacity }}>
        <Image source={ImageAssets.background2} style={{ width, height }} />
      </Animated.View>
      <Animated.View style={{ opacity, position: "absolute" }}>
        <Image source={ImageAssets.background1} style={{ width, height }} />
      </Animated.View>
    </View>
  );
}
