import { useEffect, useRef } from "react";
import { Animated, ViewProps } from "react-native";
import Duration from "../constants/Duration";

export default function FadeInView(props: ViewProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: Duration.animation,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={[
        {
          opacity: fadeAnim, // Bind opacity to animated value
        },
        props.style,
      ]}
    >
      {props.children}
    </Animated.View>
  );
}
