import React from "react";
import { Colors } from "../constants/Colors";
import Sizes from "../constants/Sizes";
import FadeInView from "./FadeInView";
import { ParisText } from "./StyledText";

export default function IconView({ color = "dark" }: { color?: ColorModel }) {
  return (
    <FadeInView>
      <ParisText
        style={{
          color: color === "dark" ? "white" : Colors.biscay,
          fontSize: Sizes.s48,
          textAlign: "center",
        }}
      >
        AF
      </ParisText>
    </FadeInView>
  );
}
