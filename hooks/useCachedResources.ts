import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export const FontResV3 = {
  spaceMono: {
    name: "space-mono",
    path: require("../assets/fonts/SpaceMono-Regular.ttf"),
  },
  parisienne: {
    name: "parisienne",
    path: require("../assets/fonts/Parisienne-Regular.ttf"),
  },
  mate: {
    name: "mate",
    path: require("../assets/fonts/MateSC-Regular.ttf"),
  },
};

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          ...Object.values(FontResV3)
            .map((val) => val)
            .reduce((a, v) => ({ ...a, [v.name]: v.path }), {}),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
