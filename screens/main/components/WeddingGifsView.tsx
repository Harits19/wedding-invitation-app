import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  useWindowDimensions,
  Image,
  View,
  TextInput,
} from "react-native";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText, ParisText } from "../../../components/StyledText";
import Colors from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import PrimaryButtonView from "./PrimaryButtonView";
import EventView from "./EventView";
import SecondaryButtonView from "./SecondaryButtonView";
import BouncingView from "../../../components/BouncingView";
import BottomModalView from "../../../components/BottomModalView";
import ModalDetailView from "./ModalDetailView";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import { FontRes } from "../../../hooks/useCachedResources";
import MyTextInput from "../../../components/MyTextInput";
import CheckBox from "../../../components/CheckBox";
import showLog from "../../../ShowLog";

const giftTypes = [
  { id: "send_gift", value: "Kirim Hadiah" },
  { id: "bank_transfer", value: "Bank Transfer" },
];

export default function WeddingGiftsView() {
  const [modalSendGift, setModalLocation] = useState(false);
  const [modalBankTransfer, setModalBankTransfer] = useState(false);
  const [modalConfirmation, setModalConfirmation] = useState(false);

  // return <EventView />;
  return (
    <ScaffoldView
      style={{
        backgroundColor: Colors.geyser,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: Sizes.s16,
          margin: Sizes.s32,
          padding: Sizes.s32,
          alignItems: "center",
        }}
      >
        <ParisText
          type="light"
          style={{
            fontSize: Sizes.s32,
            color: Colors.anzac,
            textAlign: "center",
          }}
        >
          Tanda Kasih
        </ParisText>
        <View style={{ height: Sizes.s32 }} />
        <MateText
          type="light"
          style={{ textAlign: "center", fontSize: Sizes.s16 }}
        >
          Bagi yang ingin memberikan tanda kasih, dapat mengirimkan melalui
          fitur di bawah ini:
        </MateText>
        <View style={{ height: Sizes.s32 }} />
        <Button
          name="bank-transfer"
          text="Bank Transfer"
          onPress={() => setModalBankTransfer(true)}
        />
        <View style={{ height: Sizes.s12 }} />
        <Button
          name="gift"
          text="Kirim Hadiah"
          onPress={() => setModalLocation(true)}
        />
        <View style={{ height: Sizes.s12 }} />
        <BouncingView>
          <SecondaryButtonView
            onPress={() => {
              setModalConfirmation(true);
            }}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <MaterialCommunityIcons
              name={"check-circle"}
              color={Colors.anzac}
              size={Sizes.s16}
            />
            <View style={{ width: Sizes.s8 }} />
            <MateText style={{ color: Colors.anzac }}>{"Konfirmasi"}</MateText>
          </SecondaryButtonView>
        </BouncingView>

        <ModalDetailView
          title="Kirim Hadiah"
          visible={modalSendGift}
          onPressBackdrop={() => setModalLocation(false)}
        >
          <SendGiftBody />
        </ModalDetailView>

        <ModalDetailView
          title="Bank Transfer"
          visible={modalBankTransfer}
          onPressBackdrop={() => setModalBankTransfer(false)}
        >
          <BankTransferBody />
        </ModalDetailView>
        <ModalDetailView
          visible={modalConfirmation}
          onPressBackdrop={() => setModalConfirmation(false)}
          title="Konfirmasi"
        >
          <ConfirmationBody onFinish={() => setModalConfirmation(false)} />
        </ModalDetailView>
      </View>
    </ScaffoldView>
  );
}

const Button = (
  props: TouchableOpacityProps & {
    name: MaterialIconsCommunityNameModel;
    text: string;
  }
) => {
  return (
    <PrimaryButtonView style={{ flexDirection: "row" }} {...props}>
      <MaterialCommunityIcons
        name={props.name}
        color={Colors.white}
        size={Sizes.s16}
      />
      <View style={{ width: Sizes.s8 }} />
      <MateText>{props.text}</MateText>
    </PrimaryButtonView>
  );
};

const SendGiftBody = () => {
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
};

const BankTransferBody = () => {
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
};

const ConfirmationBody = (props: { onFinish: () => void }) => {
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
      {giftTypes.map((e, index) => {
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
};

const styles = StyleSheet.create({
  address: { fontSize: Sizes.s16, textAlign: "center", color: Colors.biscay },
});
