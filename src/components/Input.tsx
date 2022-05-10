import React, { useState, forwardRef } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;
const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.BROWN_COLOR : theme.colors.BLACK_COLOR};
`;

const Input = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur,
      placeholder,
      isPassword,
      returnKeyType,
      maxLength,
      disabled,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Container>
        <Label isFocused={isFocused}>{label}</Label>
        <StyledTextInput
          ref={ref}
          isFocused={isFocused}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none" // iOS only
          underlineColorAndroid="transparent" // Android only
          editable={!disabled}
        />
      </Container>
    );
  }
);

export default Input;

const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.BLACK_COLOR,
}))`
  padding: 20px 10px;
  font-size: 14px;
  line-height: 14px;
  border-bottom-width: 1;
  border-color:${({ theme, isFocused }) =>
    isFocused ? theme.colors.BROWN_COLOR : theme.colors.DARK_GREY}
  border-radius: 4px;
`;
