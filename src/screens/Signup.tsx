import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 20px;
`;

const Title = styled.Text`
  font-size: 30px;
`;

const Signup = () => {
  return (
    <Container>
      <Title>Sign up Screen</Title>
    </Container>
  );
};

export default Signup;
