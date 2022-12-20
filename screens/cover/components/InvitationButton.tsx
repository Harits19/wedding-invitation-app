import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Pressable, Animated, Easing, PressableProps } from "react-native";
import { MateText } from "../../../components/StyledText";
import { View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";

export default function InvitationButton(props: PressableProps) {
  const minScale = 1;
  const maxScale = 1.1;
  const scale = new Animated.Value(minScale);

  function animate(easing: (value: number) => number) {
    scale.setValue(minScale);
    Animated.sequence([
      Animated.timing(scale, {
        delay: 100,
        toValue: maxScale,
        duration: 250,
        easing,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        delay: 150,
        toValue: minScale,
        duration: 300,
        easing,
        useNativeDriver: false,
      }),
    ]).start(() => {
      animate(Easing.linear);
    });
  }

  const animatedStyles = [
    {
      transform: [{ scale: scale }],
    },
  ];

  useEffect(() => {
    animate(Easing.linear);
  }, []);
  return (
    <Pressable {...props}>
      <Animated.View
        style={[
          animatedStyles,
          {
            backgroundColor: Colors.biscay,
            padding: Sizes[8],
            borderRadius: Sizes[16],
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <MaterialIcons name="mail" color={"white"} />
        <View style={{ width: Sizes[8] }} />
        <MateText>Buka Undangan</MateText>
      </Animated.View>
    </Pressable>
  );
}
