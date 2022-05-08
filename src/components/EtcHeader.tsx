import React from "react";
import { TouchableOpacity, Image } from "react-native";
import etcIcon from "../../assets/icon/icon-more-vertical.png";
import styled from "styled-components/native";

const Container = styled.View`
  padding: 16px;
`;

const EtcHeader = () => {
  return (
    <TouchableOpacity accessibilityRole="button">
      <Container>
        <Image source={etcIcon} />
      </Container>
    </TouchableOpacity>
  );
};

export default EtcHeader;
