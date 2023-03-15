import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  View,
} from "react-native";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText, ParisText } from "../../../components/StyledText";
import { Colors } from "../../../constants/Colors";
import Sizes from "../../../constants/Sizes";
import PrimaryButtonView from "../../../components/PrimaryButtonView";
import SecondaryButtonView from "../../../components/SecondaryButtonView";
import BouncingView from "../../../components/BouncingView";
import ModalDetailView from "./ModalDetailView";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import TextInputView from "../../../components/TextInputView";
import CheckBoxView from "../../../components/CheckBoxView";
import ConfirmationView from "./ConfirmationView";
import BankTransferView from "./BankTransferView";
import SendGiftView from "./SendGiftView";

export default function WeddingGiftsView() {
  const [modalSendGift, setModalLocation] = useState(false);
  const [modalBankTransfer, setModalBankTransfer] = useState(false);
  const [modalConfirmation, setModalConfirmation] = useState(false);

  return (
    <ScaffoldView
      style={{
        backgroundColor: Colors.biscay,
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
          <SendGiftView />
        </ModalDetailView>

        <ModalDetailView
          title="Bank Transfer"
          visible={modalBankTransfer}
          onPressBackdrop={() => setModalBankTransfer(false)}
        >
          <BankTransferView />
        </ModalDetailView>
        <ModalDetailView
          visible={modalConfirmation}
          onPressBackdrop={() => setModalConfirmation(false)}
          title="Konfirmasi"
        >
          <ConfirmationView onFinish={() => setModalConfirmation(false)} />
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
