import React, { useRef, useState } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import { Image, Input, Button } from "../components";

import logo from "../../assets/logo.png";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /*background-color: "#ffff";*/
  padding: 0 20px;
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const validateEmail = (email) => {
    const regex =
      /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    return regex.test(email);
  };

  const removeWhitespace = (text) => {
    const regex = /\s/g;
    return text.replace(regex, "");
  };

  const _handleEmailChange = (email) => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? "" : "Please verify your email."
    );
  };
  const _handlePasswordChange = (password) => {
    setPassword(removeWhitespace(password));
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container>
        <Image url={logo} imageStyle={{ borderRadius: 8 }} />
        <Input
          label="Email"
          value={email}
          onChangeText={_handleEmailChange}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={_handlePasswordChange}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />

        <Button title="Login" disabled={disabled} isFilled={true} />
        <Button
          title="Sign up with email"
          onPress={() => navigation.navigate("Signup")}
          isFilled={false}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
