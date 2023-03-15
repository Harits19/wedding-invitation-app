import React from "react";
import { useEffect, useRef, useState } from "react";
import { Animated, Image, View, useWindowDimensions } from "react-native";
import { ImageAssets } from "../assets/images/ImageAssets";
import Duration from "../constants/Duration";

export default function Carousel() {
  const ITEMS = [
    ImageAssets.background1,
    ImageAssets.background2,
    ImageAssets.background3,
  ];

  const START_SCALE = 1;
  const END_SCALE = 1.25;

  const scale = useRef(new Animated.Value(START_SCALE)).current;
  const { width, height } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const runAnimation = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: END_SCALE,
        duration: 4000,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start(() => {
      scale.setValue(START_SCALE);
      setCurrentIndex((prev) => prev + 1);
      runAnimation();
    });
  };
  useEffect(() => {
    runAnimation();
  }, []);

  const opacity = scale.interpolate({
    inputRange: [START_SCALE, 1.1, END_SCALE],
    outputRange: [1, 1, 0],
  });

  const frontImage = currentIndex % ITEMS.length;
  const backImage = frontImage === ITEMS.length - 1 ? 0 : frontImage + 1;

  return (
    <View>
      <Animated.View style={{ position: "absolute" }}>
        <Image source={ITEMS[backImage]} style={{ width, height }} />
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
        <Image source={ITEMS[frontImage]} style={{ width, height }} />
      </Animated.View>
    </View>
  );
}
