import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import MyDropdown, { MyDropdownItem } from "../../../components/MyDropdown";
import MyImage from "../../../components/MyImage";
import MyTextInput from "../../../components/MyTextInput";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText } from "../../../components/StyledText";
import Colors from "../../../constants/MyColors";
import Sizes from "../../../constants/Sizes";
import { guestName } from "../../../services/GuestService";
import showLog from "../../../ShowLog";
import SecondaryButtonView from "./SecondaryButtonView";

export default function AttendanceConfirmationView() {
  const [attend, setAttend] = useState(false);
  const [withPartner, setWithPartner] = useState(false);

  showLog({ withPartner });

  return (
    <ScaffoldView style={{ justifyContent: "center", padding: Sizes.s32 }}>
      <MyImage source={ImageAssets.background2} style={styles.body}>
        <View style={{ padding: Sizes.s16 }}>
          <MateText
            style={{
              textAlign: "center",
              fontSize: 16,
              zIndex: 3,
            }}
          >
            Kehadiran Bapak/Ibu/Saudara/i akan menjadi kehormatan besar bagi
            kami dan keluarga. Mohon konfirmasi kehadiran Anda melalui formulir
            reservasi di bawah ini:
          </MateText>
          <View style={{ height: Sizes.s24 }} />
          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: Sizes.s16,
              padding: Sizes.s24,
            }}
          >
            <MyTextInput placeholder="Nama" defaultValue={guestName} />
            <View style={{ height: Sizes.s8 }} />
            <MyTextInput placeholder="No Hp" />
            <View style={{ height: Sizes.s8 }} />
            <MyTextInput placeholder="Alamat" />
            <View style={{ height: Sizes.s8 }} />
            <MyDropdown
              value={attend}
              label="Apakah Anda akan membawa partner?"
              items={[true, false].map((e) => {
                return {
                  value: e,
                  text: e
                    ? "Ya, Saya akan hadir"
                    : "Tidak, Saya tidak bisa hadir",
                } as MyDropdownItem<boolean>;
              })}
              onChangeValue={(val) => {
                setAttend(val);
              }}
            />
            <View style={{ height: Sizes.s8 }} />
            <MyDropdown
              value={withPartner}
              label="Apakah Anda akan membawa partner?"
              items={[true, false].map((e) => {
                return {
                  value: e,
                  text: e
                    ? "Ya, Saya akan membawa 1 partner"
                    : "Tidak, Saya akan datang sendiri",
                } as MyDropdownItem<boolean>;
              })}
              onChangeValue={(val) => {
                setWithPartner(val);
              }}
            />
            <View style={{ height: Sizes.s32 }} />
            <SecondaryButtonView style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="send" color={Colors.anzac} />
              <View style={{ width: Sizes.s12 }} />
              <MateText style={{ color: Colors.anzac }}>
                Kirim Konfirmasi
              </MateText>
            </SecondaryButtonView>
          </View>
        </View>
      </MyImage>
    </ScaffoldView>
  );
}

const styles = StyleSheet.create({
  body: {
    borderRadius: 16,
    padding: Sizes.s32,
  },
});
