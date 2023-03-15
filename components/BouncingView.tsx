import React, { useEffect } from "react";
import { Animated, Easing, ViewProps } from "react-native";

export default function BouncingView({
  maxScale = 1.1,
  ...props
}: ViewProps & {
  maxScale?: number;
}) {
  const MIN_SCALE = 1;
  const scale = new Animated.Value(MIN_SCALE);

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
        toValue: MIN_SCALE,
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
