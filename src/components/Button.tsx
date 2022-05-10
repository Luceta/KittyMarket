import React from "react";
import styled from "styled-components/native";

const TRANSPARENT = "transparent";

const Container = styled.TouchableOpacity`
  background-color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.DARK_GREY : TRANSPARENT};
  align-items: center;
  border-radius: 44px;
  width: 100%;
  padding: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  margin-top: 20px;
`;
const Title = styled.Text`
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.WHITE_COLOR : theme.colors.DARK_GREY};
`;

interface Button {
  containerStyle: object;
  title: string;
  onPress: funcType;
  isFilled: boolean;
  disabled: boolean;
}

const Button = ({ containerStyle, title, onPress, isFilled, disabled }) => {
  return (
    <Container
      style={containerStyle}
      onPress={onPress}
      isFilled={isFilled}
      disabled={disabled}
    >
      <Title isFilled={isFilled}>{title}</Title>
    </Container>
  );
};

export default Button;
