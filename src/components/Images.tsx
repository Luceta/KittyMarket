import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;
const StyledImage = styled.Image`
  width: 100px;
  height: 100px;
`;

interface Image {
  url: ImageSourcePropType;
  imageStyle?: Object;
}

const Image = ({ url, imageStyle }: Image) => {
  return (
    <Container>
      <StyledImage source={url} style={imageStyle} />
    </Container>
  );
};

export default Image;
