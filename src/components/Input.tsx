import React, { useState, forwardRef } from "react";
import { ReturnKeyTypeOptions, TextInput, TextProps } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { ThemeProps } from "styled-components/native";

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

interface Focused extends ThemeProps<DefaultTheme> {
  isFocused?: boolean;
}

const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({ theme, isFocused }: Focused) =>
    isFocused ? theme.colors.BROWN_COLOR : theme.colors.BLACK_COLOR};
`;

interface InputBasicProps {
  label: string;
  value?: string;
  onChangeText?: (x: string) => void;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number;
  disabled?: Boolean;
  isPassword?: Boolean;
}

const Input = ({
  label,
  value,
  onChangeText,
  onSubmitEditing,
  placeholder,
  returnKeyType,
  maxLength,
  disabled,
  isPassword,
}: InputBasicProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Label isFocused={isFocused}>{label}</Label>
      <StyledTextInput
        isFocused={isFocused}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
        }}
        placeholder={placeholder}
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
};

export default Input;

const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.BLACK_COLOR,
}))`
  padding: 20px 10px;
  font-size: 14px;
  line-height: 14px;
  border-bottom-width: 1px;
  border-color: ${({ theme, isFocused }: Focused) =>
    isFocused ? theme.colors.BROWN_COLOR : theme.colors.DARK_GREY};
  border-radius: 4px;
`;
