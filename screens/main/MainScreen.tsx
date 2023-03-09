import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { View, FlatList, useWindowDimensions, Text } from "react-native";
import AudioAssets from "../../assets/audio/AudioAssets";
import SideBarView from "./components/SideBarView";
import Colors from "../../constants/Colors";
import BrideView from "./components/BrideView";
import Sizes from "../../constants/Sizes";
import ScaffoldView from "../../components/ScaffoldView";
import ScaffoldWindowView from "../../components/ScaffoldWindowView";
import EventView from "./components/EventView";
import CountingDayView from "./components/CountingDayView";
import WeddingGiftsView from "./components/WeddingGiftsView";
import AttendanceConfirmationView from "./components/AttendanceConfirmationView";

export default function MainScreen() {
  const { width, height } = useWindowDimensions();
  const [audio] = useState(new Audio(AudioAssets.backgroundAudio));
  const [isPlaying, setIsPlaying] = useState(true);
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const menusRef = useRef<FlatList>(null);

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const toggleAudio = () => {
    audio.paused ? audio.play() : audio.pause();
    setIsPlaying(!isPlaying);
  };
  const menus = [
    {
      view: <BrideView />,
      name: "Kedua Mempelai",
    },
    {
      view: <EventView />,
      name: "Detail Acara",
    },
    {
      view: <CountingDayView />,
      name: "Menghitung Hari",
    },
    {
      view: <AttendanceConfirmationView />,
      name: "Konfirmasi Kehadiran",
    },
    {
      view: <WeddingGiftsView />,
      name: "Tanda Kasih",
    },
  ];

  useEffect(() => {
    console.log("play audio");
    // audio.play();
    audio.loop = true;
  }, []);

  return (
    <ScaffoldWindowView>
      <FlatList
        ref={menusRef}
        data={menus.map((e) => e.view)}
        renderItem={({ item }) => <ScaffoldView>{item}</ScaffoldView>}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: 8,
          flexDirection: "row",
        }}
      >
        <FloatingIcon
          name={!isPlaying ? "play-circle" : "pause-circle"}
          onPress={toggleAudio}
        />
        <View style={{ width: Sizes.s4 }} />
        <FloatingIcon name="home-circle" onPress={toggleSideBar} />
      </View>
      <SideBarView
        items={menus.map((e) => e.name)}
        onPressMenu={(val) => {
          menusRef.current?.scrollToIndex({ index: val.index });
        }}
        visible={sideBarVisible}
        onRequestClose={toggleSideBar}
      >
        <Text style={{ color: "black", width: width / 2 }}>Home</Text>
      </SideBarView>
    </ScaffoldWindowView>
  );
}

const FloatingIcon = (props: {
  name: MaterialIconsCommunityNameModel;
  onPress: () => void;
}) => {
  const size = Sizes.s40;
  return (
    <MaterialCommunityIcons
      name={props.name}
      onPress={props.onPress}
      style={{
        backgroundColor: Colors.biscay,
        borderRadius: size / 2,
        borderWidth: 1,
        borderColor: Colors.white,
      }}
      size={size}
      color={Colors.white}
    />
  );
};
