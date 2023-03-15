import React from "react";
import { View } from "react-native";
import { MateText } from "../../../components/StyledText";
import { Colors } from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import PrimaryButtonView from "../../../components/PrimaryButtonView";
import { styles } from "./styles";

export default function SendGiftBody() {
  return (
    <>
      <MateText style={styles.address}>
        Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih kepada
        mempelai dan keluarga dapat mengirimkan hadiah melalui alamat berikut:
      </MateText>
      <View style={{ height: Sizes.s16 }} />
      <MateText
        style={{
          ...styles.address,
          color: Colors.anzac,
        }}
      >
        Fulan & Fulan
      </MateText>
      <MateText style={styles.address}>
        Jl. Selamet riyadi no 18 kota probolinggo kode pos : 67213
      </MateText>
      <View style={{ height: Sizes.s32 }} />

      <PrimaryButtonView size={12}>
        <MateText>Salin</MateText>
      </PrimaryButtonView>
    </>
  );
}
