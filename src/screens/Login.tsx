import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import { Image, Input, Button } from "../components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import logo from "../../assets/logo.png";
import { removeWhitespace } from "../utils/user";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const ErrorText = styled.Text`
  width: 100%;
  align-items: flex-start;
  margin-top: 6px;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.ERROR_COLOR};
`;

type RootStackParamList = {
  Login: {};
};

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const _handleEmailChange = (email: string) => {
    setEmail(email);
  };
  const _handlePasswordChange = (password: string) => {
    console.log("original:", password);
    const newPassword = removeWhitespace(password);
    console.log(newPassword, "check new Password");

    setPassword(password);
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
          label="Password"
          value={password}
          onChangeText={_handlePasswordChange}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        {error && (
          <ErrorText>*이메일 또는 비밀번호가 일치하지 않습니다.</ErrorText>
        )}

        <Button title="Login" isFilled={true} />
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
