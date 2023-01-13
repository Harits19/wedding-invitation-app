import React from "react";
import { useEffect, useRef, useState } from "react";
import { Animated, Image, View, useWindowDimensions } from "react-native";
import { ImageAssets } from "../assets/images/ImageAssets";
import Duration from "../constants/Duration";

const items = [
  ImageAssets.background1,
  ImageAssets.background2,
  ImageAssets.background3,
];

const startScale = 1;
const endScale = 1.25;

export default function Carousel() {
  const scale = useRef(new Animated.Value(startScale)).current;
  const { width, height } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const runAnimation = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: endScale,
        duration: 4000,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start(() => {
      scale.setValue(startScale);
      setCurrentIndex((prev) => prev + 1);
      runAnimation();
    });
  };
  useEffect(() => {
    runAnimation();
  }, []);

  const opacity = scale.interpolate({
    inputRange: [startScale, 1.1, endScale],
    outputRange: [1, 1, 0],
  });

  const frontImage = currentIndex % items.length;
  const backImage = frontImage === items.length - 1 ? 0 : frontImage + 1;

  return (
    <View>
      <Animated.View style={{ position: "absolute" }}>
        <Image source={items[backImage]} style={{ width, height }} />
      </Animated.View>
      <Animated.View
        style={{
          opacity,
          transform: [
            {
              scale,
            },
          ],
        }}
      >
        <Image source={items[frontImage]} style={{ width, height }} />
      </Animated.View>
    </View>
  );
}
