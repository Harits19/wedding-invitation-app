import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText } from "../../../components/StyledText";
import Colors from "../../../constants/Colors";

export default function AttendanceConfirmationView() {
  return (
    <ScaffoldView style={{ justifyContent: "center" }}>
      <Image source={ImageAssets.background1} style={styles.body} />
      <View style={{ ...styles.body, zIndex: 3, justifyContent: "center" }}>
        <MateText
          style={{
            textAlign: "center",
            fontSize: 16,
            backgroundColor: "yellow",
          }}
        >
          Kehadiran Bapak/Ibu/Saudara/i akan menjadi kehormatan besar bagi kami
          dan keluarga. Mohon konfirmasi kehadiran Anda melalui formulir
          reservasi di bawah ini:
        </MateText>
      </View>
    </ScaffoldView>
  );
}

const styles = StyleSheet.create({
  body: {
    borderRadius: 16,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 16,
    marginVertical: 32,
  },
});
