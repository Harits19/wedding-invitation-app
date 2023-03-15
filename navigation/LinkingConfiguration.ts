/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    "http://localhost*",
    "https://harits19.github.io/wedding-invitation-app/",
  ],
  config: {
    screens: {
      Cover: {},
      Main: {},
    },
  },
};

export default linking;
