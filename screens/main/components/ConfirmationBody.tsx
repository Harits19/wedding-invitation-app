import React from "react";
import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import CheckBox from "../../../components/CheckBox";
import MyTextInput from "../../../components/MyTextInput";
import { MateText } from "../../../components/StyledText";
import { Colors } from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import PrimaryButtonView from "../../../components/PrimaryButtonView";
import { styles } from "./styles";

export default function ConfirmationBody(props: { onFinish: () => void }) {
  const GIFT_TYPE = [
    { id: "send_gift", value: "Kirim Hadiah" },
    { id: "bank_transfer", value: "Bank Transfer" },
  ];

  const [selectedGiftType, setSelectedGiftType] = useState<string[]>([]);

  return (
    <>
      <MateText style={styles.address}>
        Kami sangat berterima kasih kepada Bapak/Ibu/Saudara/i yang berkenan
        memberikan tanda kasih kepada kami. Silakan melakukan konfirmasi pada
        kolom di bawah untuk mempermudah pendataan:
      </MateText>
      <View style={{ height: Sizes.s16 }} />
      <MyTextInput placeholder="Nama" />
      <View style={{ height: Sizes.s12 }} />
      <MyTextInput placeholder="Nomor Hp" />
      <View style={{ height: Sizes.s24 }} />
      <MateText style={[styles.address, { textAlign: "left" }]}>
        Jenis Tanda Kasih
      </MateText>
      <View style={{ height: Sizes.s12 }} />
      {GIFT_TYPE.map((e, index) => {
        const checked = selectedGiftType.includes(e.id);
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (checked) {
                setSelectedGiftType(
                  [...selectedGiftType].filter((filter) => filter != e.id)
                );
                return;
              }
              setSelectedGiftType([...selectedGiftType, e.id]);
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox value={checked} />
              <View style={{ width: Sizes.s12 }} />
              <MateText style={styles.address}>{e.value}</MateText>
            </View>
            <View style={{ height: Sizes.s8 }} />
          </TouchableOpacity>
        );
      })}
      <View style={{ height: Sizes.s16 }} />
      <MyTextInput
        multiline={true}
        numberOfLines={3}
        placeholder="Tulis Pesan"
      />
      <View style={{ height: Sizes.s24 }} />
      <PrimaryButtonView
        size={12}
        onPress={props.onFinish}
        style={{ backgroundColor: Colors.biscay }}
      >
        <MateText>Kirim Konfirmasi</MateText>
      </PrimaryButtonView>
    </>
  );
}
