import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { ImageAssets } from "../../../assets/images/ImageAssets";
import ScaffoldView from "../../../components/ScaffoldView";
import { MateText, ParisText } from "../../../components/StyledText";
import Colors from "../../../constants/MyColors";
import { countDifferent } from "../../../utils/DayUtil";

export default function CountingDayView() {
  const marriedDate = new Date(2024, 1, 25, 10, 30, 0);
  const [today, setToday] = useState(new Date());
  const { day, hour, minute, second } = countDifferent(today, marriedDate);

  useEffect(() => {
    setInterval(() => {
      setToday(new Date());
    }, 1000);
  }, []);

  return (
    <ScaffoldView
      style={{
        backgroundColor: Colors.geyser,
        alignItems: "center",
        padding: 32,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderRadius: 16,
          backgroundColor: "white",
          alignSelf: "stretch",
        }}
      >
        <Image
          source={ImageAssets.background1}
          style={{
            height: 240,
            width: "100%",
            borderRadius: 16,
          }}
        />
        <View style={{ height: 42 }} />
        <View style={{ marginHorizontal: 16 }}>
          <ParisText
            style={{ fontSize: 48, color: Colors.anzac, textAlign: "center" }}
          >
            Counting{"\n"}Days
          </ParisText>
          <View style={{ height: 16 }} />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {[
              { name: "Hari", value: day },
              { name: "Jam", value: hour },
              { name: "Menit", value: minute },
              { name: "Detik", value: second },
            ].map((e) => (
              <View
                style={{
                  borderRadius: 16,
                  backgroundColor: Colors.bigStone,
                  paddingVertical: 8,
                  paddingHorizontal: 4,
                  width: 60,
                  height: 65,
                  alignItems: "center",
                  marginHorizontal: 4,
                }}
              >
                <MateText style={{ fontSize: 24 }}>{e.value}</MateText>
                <MateText style={{ fontSize: 12 }}>{e.name}</MateText>
              </View>
            ))}
          </View>
          <View style={{ height: 16 }} />
        </View>
        <View style={{ height: 24 }} />
      </View>
    </ScaffoldView>
  );
}
