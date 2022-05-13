import React, { useState } from "react";
import { Platform, Alert, ImageURISource } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;

type StyledImageProps = {
  rounded?: Boolean;
};

const StyledImage = styled.Image<StyledImageProps>`
  width: 100px;
  height: 100px;
  border-radius: ${({ rounded }) => (rounded ? 50 : 0)}px;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.DARK_GREY};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
const ButtonIcon = styled(MaterialIcons).attrs({
  name: "photo-camera",
  size: 22,
})`
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
`;

type PhotoButton = {
  onPress: () => void;
};

const PhotoButton = ({ onPress }: PhotoButton) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon />
    </ButtonContainer>
  );
};

type ImageUriObj = {
  url: ImageURISource;
};

interface ImageProps {
  url: ImageSourcePropType;
  imageStyle?: Object;
  rounded?: Boolean;
  showButton?: Boolean;
  onChangeImage?: (url: string) => void;
}

const Image = ({
  url,
  imageStyle,
  rounded,
  showButton,
  onChangeImage,
}: ImageProps) => {
  const _handleEditButton = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        onChangeImage?.(result.uri);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        Alert.alert("Photo Error", error.message);
      }
    }
  };

  return (
    <Container>
      <StyledImage source={url} style={imageStyle} rounded={rounded} />
      {showButton && <PhotoButton onPress={_handleEditButton} />}
    </Container>
  );
};

export default Image;
