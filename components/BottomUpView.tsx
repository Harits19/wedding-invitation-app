import { useEffect, useRef } from "react";
import { Animated, ViewProps } from "react-native";
import Duration from "../constants/Duration";

export default function BottomUpView(props: ViewProps) {
  const marginTopAnimation = useRef(new Animated.Value(8)).current; // Initial value for opacity: 0
  
  useEffect(() => {
    Animated.timing(marginTopAnimation, {
      toValue: 0,
      duration: Duration.animation,
      useNativeDriver: true,
    }).start();
  }, [marginTopAnimation]);

  return (
    <Animated.View // Special animatable View
      style={[
        {
          marginTop: marginTopAnimation, // Bind opacity to animated value
        },
        props.style,
      ]}
    >
      {props.children}
    </Animated.View>
  );
}
