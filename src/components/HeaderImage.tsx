import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { ImageSourcePropType } from "react-native";

import styled from "styled-components/native";

const Goback = styled.View`
  padding: 16px;
`;

interface ImageProps {
  imgSrc: ImageSourcePropType;
}

const headerImage = ({ imgSrc }: ImageProps) => {
  return (
    <TouchableOpacity>
      <Goback>
        <Image source={imgSrc} />
      </Goback>
    </TouchableOpacity>
  );
};

export default headerImage;
