import React, { useState } from "react";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Button, Image } from "../components";
import profileIcon from "../../assets/profile-image.png";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.ERROR_COLOR};
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [account, setAccount] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);

  const [photoUrl, setPhotoUrl] = useState("");

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Image
          rounded
          showButton
          url={photoUrl ? { uri: photoUrl } : profileIcon}
          onChangeImage={(url) => setPhotoUrl(url)}
        />
        <Input
          label="Email"
          value={email}
          placeholder="Set your Email"
          returnKeyType="next"
        />

        {emailWarning && (
          <ErrorText>*올바르지 않은 이메일 형식입니다.</ErrorText>
        )}

        <Input
          label="Password"
          value={password}
          placeholder="Password"
          returnKeyType="next"
        />
        {passwordWarning && (
          <ErrorText>*비밀번호는 6자 이상이어야 합니다.</ErrorText>
        )}
        <Input
          label="Username"
          value={name}
          placeholder="2-10자 이내여야 합니다."
          returnKeyType="next"
        />
        <Input
          label="account"
          value={account}
          placeholder="2-10자 이내여야 합니다."
          returnKeyType="next"
        />

        <Input
          label="Intro"
          value={intro}
          placeholder="Introduce your product and yourself"
          returnKeyType="next"
        />

        <Button title="냥이마켓 시작하기" disabled={disabled} isFilled={true} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
