import React, { useState } from "react";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

const loadImages = (images: any[]) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });
};

const loadFonts = (fonts: any[]) => {
  return fonts.map((font: string | Record<string, Font.FontSource>) =>
    Font.loadAsync(font)
  );
};

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
    await new Promise((resolve) => setTimeout(resolve, 10000));
  };

  return isReady ? (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Text>finish to load</Text>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={startLoading}
      onFinish={onFinish}
      onError={console.warn}
    />
  );
}
