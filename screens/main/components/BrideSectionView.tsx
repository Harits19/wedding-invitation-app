import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import { ParisText, MateText } from "../../../components/StyledText";
import { Colors } from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import { openNewTab } from "../../../utils/UrlUtil";

export default function BrideSectionView(props: {
  nickName: string;
  fullName: string;
  motherName: string;
  fatherName: string;
  instagramAccount: string;
}) {
  const imageSize = 240;
  return (
    <>
      <View style={{ height: Sizes.s16 }} />
      <ParisText style={{ fontSize: Sizes.s48 }}>{props.nickName}</ParisText>
      <MateText type="light" style={{ fontSize: Sizes.s24 }}>
        {props.fullName}
      </MateText>
      <View style={{ height: Sizes.s8 }} />
      <MateText
        type="light"
        style={{ fontSize: Sizes.s16, textAlign: "center" }}
      >
        Putra dari Bapak {props.fatherName} , Dan Ibu {props.motherName}
      </MateText>
      <View style={{ height: Sizes.s8 }} />
      <Entypo
        name="instagram-with-circle"
        size={Sizes.s32}
        onPress={() => {
          openNewTab(`https://www.instagram.com/${props.instagramAccount}/`);
        }}
        color={Colors.biscay}
      />
      <View style={{ height: Sizes.s32 }} />
      <Image
        style={{
          width: 160,
          height: imageSize,
          borderRadius: imageSize / 3,
        }}
        source={ImageAssets.background1}
      />
    </>
  );
}
