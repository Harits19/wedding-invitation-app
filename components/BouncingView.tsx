import React, { useEffect } from "react";
import { Animated, Easing, ViewProps } from "react-native";

export default function BouncingView({
  maxScale = 1.1,
  ...props
}: ViewProps & {
  maxScale?: number;
}) {
  const minScale = 1;
  const scale = new Animated.Value(minScale);

  function animate() {
    Animated.sequence([
      Animated.timing(scale, {
        delay: 100,
        toValue: maxScale,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        delay: 150,
        toValue: minScale,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start(() => {
      animate();
    });
  }

  useEffect(() => {
    animate();
  }, []);
  return (
    <Animated.View
      {...props}
      style={[
        {
          transform: [{ scale: scale }],
        },
        props.style,
      ]}
    ></Animated.View>
  );
}
