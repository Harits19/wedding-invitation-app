import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

// TODO fix issue root url
import CoverScreen from "./screens/cover/CoverScreen";
import AttendanceConfirmationView from "./screens/main/components/AttendanceConfirmationView";
import PrayerGreetingView from "./screens/main/components/PrayerGreetingView";
import MainScreen from "./screens/main/MainScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    // return <PrayerGreetingView />;
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
