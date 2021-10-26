import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { margin } from 'styled-system';

interface TextInputFieldProps {
  control: Control<FieldValues, object>;
  name: string;
  required?: boolean;
  hideText?: boolean;
  my?: number;
  mx?: number;
  error?: {
    message: string;
  };
}

const ErrorText = styled.Text`
  color: ${(props) => props.theme.colors.error};
  font-family: raleway-bold;
  font-size: 12px;
  text-align: right;
  margin: ${(props) => `${props.theme.space[0]} 0 `};
`;

const Input = styled.TextInput<Partial<TextInputFieldProps>>`
  ${margin};
  border: ${(props) => `1px solid ${props.theme.colors.black}`};
  border-radius: ${(props) => props.theme.border.defaultRadius};
  height: 50px;
  padding: ${(props) => `0 ${props.theme.space[2]}`};
  font-family: raleway-regular;
`;

export const TextInputField: React.FC<TextInputFieldProps> = ({
  name,
  control,
  required,
  error,
  hideText,
  my,
  mx
}) => {
  const rules = {
    required: required
      ? {
          value: true,
          message: `${name} är obligatoriskt!`
        }
      : undefined
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { name, value, onChange } }) => (
        <View>
          <Input
            my={my}
            mx={mx}
            secureTextEntry={hideText}
            placeholder={name}
            value={value}
            onChangeText={(text) => onChange(text)}
          />
          {!!error && <ErrorText>{error.message}</ErrorText>}
        </View>
      )}
    />
  );
};
