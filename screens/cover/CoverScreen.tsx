import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { ImageAssets } from "../../assets/images/ImageAssets";
import WindowView from "../../components/WindowView";
import { MateText, ParisText } from "../../components/StyledText";
import Colors from "../../constants/Colors";
import { Layout } from "../../constants/Layout";
import Sizes from "../../constants/Sizes";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { RootStackParamList } from "../../types";
import InvitationButton from "./components/InvitationButton";
import TopCircleView from "../../components/TopCircleView";
import FadeInView from "../../components/FadeInView";
import BottomUpView from "../../components/BottomUpView";

type Props = NativeStackScreenProps<RootStackParamList, "Cover">;

export default function CoverScreen({ navigation }: Props) {
  const { width, height } = useWindowDimensions();

  return (
    <WindowView style={{ backgroundColor: Colors.biscay }}>
      <TopCircleView>
        <Image
          source={ImageAssets.background1}
          style={[styles.image, { width: width, height: height }]}
        />
        <View style={styles.bodyImage}>
          <FadeInView>
            <ParisText style={styles.headerText}>AF</ParisText>
          </FadeInView>
          <FadeInView>
            <BottomUpView>
              <MateText style={styles.h2}>Fulan & Fulanah</MateText>
              <MateText style={styles.h3}>25.01.2027</MateText>
            </BottomUpView>
          </FadeInView>

          <View style={styles.expanded} />
          <InvitationButton
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "Bride" }],
              });
            }}
          />
        </View>
      </TopCircleView>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomText}>
          <MateText>Create with Love</MateText>
        </View>
        <View style={styles.bottomText}>
          <MateText>2027 Name1&Name2. All Right Reserved</MateText>
        </View>
      </View>
    </WindowView>
  );
}

const styles = StyleSheet.create({
  headerText: { color: "white", fontSize: Sizes[48] },
  h2: { color: "white", fontSize: Sizes[32] },
  h3: { color: "white", fontSize: Sizes[24], textAlign: "center" },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.biscay,
    justifyContent: "center",
  },
  expanded: { flex: 1 },

  bottomText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyImage: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 3,
    paddingVertical: Sizes[56],
  },
  image: {
    width: Layout.window.width,
    height: Layout.window.height,
    position: "absolute",
    zIndex: 2,
  },
});
