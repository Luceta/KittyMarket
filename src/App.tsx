import React, { useState } from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import Navigation from "./navigations";
import { ProgressProvider } from "./contexts";

const loadImages = (images: string[] | number[] | string[][] | number[][]) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });
};

const loadFonts = (
  fonts:
    | string[]
    | {
        [fontFamily: string]: Font.FontSource;
      }[]
) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const onFinish = () => setIsReady(true);

  const _loadAssets = async () => {
    const imageAssets = loadImages([require("../assets/logo.png")]);
    const fontAssets = loadFonts([Ionicons.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  const startLoading = async () => {
    _loadAssets();
  };

  return isReady ? (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </ProgressProvider>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={startLoading}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
