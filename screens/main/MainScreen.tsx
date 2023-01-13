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
      name: "Home",
    },
    {
      view: <BrideView />,
      name: "Home",
    },
    {
      view: <BrideView />,
      name: "Home",
    },
    {
      view: <BrideView />,
      name: "Home",
    },
    {
      view: <BrideView />,
      name: "Home",
    },
  ];

  const iconProps = {
    size: 40,
    color: Colors.biscay,
  };

  useEffect(() => {
    console.log("play audio");
    audio.play();
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
          margin: 24,
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          name={!isPlaying ? "play-circle" : "pause-circle"}
          onPress={toggleAudio}
          {...iconProps}
        />
        <MaterialCommunityIcons
          name={"home-circle"}
          onPress={toggleSideBar}
          {...iconProps}
        />
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
