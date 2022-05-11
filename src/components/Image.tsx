import React, { useState } from "react";
import { Platform, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;

const StyledImage = styled.Image`
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

const PhotoButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon />
    </ButtonContainer>
  );
};

interface Image {
  url: ImageSourcePropType;
  imageStyle?: Object;
}

const Image = ({ url, imageStyle, rounded, showButton, onChangeImage }) => {
  const [isLocalImg, setIsLocalImg] = useState(true);
  const _handleEditButton = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log(result, "check result");

      if (!result.cancelled) {
        onChangeImage(result.uri);
        setIsLocalImg(!isLocalImg);
      }
    } catch (e) {
      Alert.alert("Photo Error", e.message);
    }
  };

  return (
    <Container>
      {isLocalImg ? (
        <StyledImage source={url} style={imageStyle} rounded={rounded} />
      ) : (
        <StyledImage
          source={{ url: url }}
          style={imageStyle}
          rounded={rounded}
        />
      )}

      {showButton && <PhotoButton onPress={_handleEditButton} />}
    </Container>
  );
};

export default Image;
