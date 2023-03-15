import React from "react";
import { Image, View } from "react-native";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import { MateText } from "../../../components/StyledText";
import { Colors } from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import PrimaryButtonView from "../../../components/PrimaryButtonView";
import { styles } from "./styles";

export default function BankTransferBody() {
  return (
    <View style={{ alignItems: "center" }}>
      <MateText style={styles.address}>
        Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih kepada
        mempelai dan keluarga dapat melakukan transfer melalui rekening berikut:
      </MateText>
      <Image
        source={ImageAssets.mandiriLogo}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
      <MateText style={[styles.address, { color: Colors.anzac }]}>
        1234512413123
      </MateText>
      <MateText style={styles.address}>Abdullah Harits</MateText>
      <View style={{ height: Sizes.s24 }} />
      <PrimaryButtonView size={12} style={{ alignSelf: "stretch" }}>
        <MateText>Salin</MateText>
      </PrimaryButtonView>
    </View>
  );
}
