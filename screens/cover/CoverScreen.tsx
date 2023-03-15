import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { ImageAssets } from "../../assets/images/ImageAssets";
import { MateText, ParisText } from "../../components/StyledText";
import { Colors } from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import { RootStackParamList } from "../../types";
import TopCircleView from "../../components/TopCircleView";
import FadeInView from "../../components/FadeInView";
import BottomUpView from "../../components/BottomUpView";
import CopyRightView from "../../components/CopyrightView";
import IconView from "../../components/IconView";
import ScaffoldView from "../../components/ScaffoldView";
import ScaffoldWindowView from "../../components/ScaffoldWindowView";
import BouncingView from "../../components/BouncingView";
import { MaterialIcons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Cover">;

export default function CoverScreen({ navigation }: Props) {
  const { width, height } = useWindowDimensions();

  return (
    <ScaffoldWindowView>
      <ScaffoldView style={{ height, backgroundColor: Colors.biscay }}>
        <TopCircleView>
          <Image
            source={ImageAssets.background1}
            style={[styles.image, { width: width, height: height }]}
          />
          <View style={styles.bodyImage}>
            <IconView />
            <FadeInView>
              <BottomUpView>
                <MateText style={styles.h2}>Fulan & Fulanah</MateText>
                <MateText style={styles.h3}>25.01.2027</MateText>
              </BottomUpView>
            </FadeInView>

            <View style={styles.expanded} />
            <Pressable
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Main" }],
                });
              }}
            >
              <BouncingView
                style={[
                  {
                    backgroundColor: Colors.biscay,
                    padding: Sizes.s8,
                    borderRadius: Sizes.s16,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <MaterialIcons name="mail" color={"white"} />
                <View style={{ width: Sizes.s8 }} />
                <MateText>Buka Undangan</MateText>
              </BouncingView>
            </Pressable>
          </View>
        </TopCircleView>
        <View style={styles.bottomContainer}>
          <CopyRightView />
        </View>
      </ScaffoldView>
    </ScaffoldWindowView>
  );
}

const styles = StyleSheet.create({
  h2: { color: "white", fontSize: Sizes.s32 },
  h3: { color: "white", fontSize: Sizes.s24, textAlign: "center" },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.biscay,
    justifyContent: "center",
  },
  expanded: { flex: 1 },
  bodyImage: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 3,
    paddingVertical: Sizes.s56,
  },
  image: {
    position: "absolute",
    zIndex: 2,
  },
});
