import React from "react";
import { TouchableOpacity, Image } from "react-native";
import leftArrow from "../../assets/icon/icon-arrow-left.png";
import styled from "styled-components/native";

const Goback = styled.View`
  padding: 16px;
`;

const GobackButton = () => {
  return (
    <TouchableOpacity accessibilityRole="button">
      <Goback>
        <Image source={leftArrow} />
      </Goback>
    </TouchableOpacity>
  );
};

export default GobackButton;
