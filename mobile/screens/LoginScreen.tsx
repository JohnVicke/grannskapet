import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { TextInputField } from '../components/TextInputField';
import styled from 'styled-components/native';
import { Icon } from '../components/Icon';
import { useAuth0 } from '../hooks/useAuth0';
import { useMeQuery } from '../generated/graphql';

const Form = styled.View`
  margin-bottom: ${(props) => props.theme.space[0]};
`;

const Divider = styled.View`
  margin: 50px 0;
`;

const Line = styled.View`
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const DividerText = styled.Text`
  font-family: raleway-regular;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.background};
  padding: 0 10px;
  position: absolute;
  top: -10px;
  align-self: center;
`;

type FormFieldTypes = {
  email: string;
  password: string;
};

interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const { data, loading, error } = useMeQuery();
  console.log(data);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' });

  const { auth0LoginScreen } = useAuth0();

  const onSubmit = ({ email, password }: FormFieldTypes) => {
    console.log(email, password);
  };

  return (
    <Layout>
      <Form>
        <TextInputField
          my={1}
          control={control}
          name="email"
          required
          error={errors['email']}
        />
        <TextInputField
          my={1}
          control={control}
          name="password"
          required
          error={errors['password']}
          hideText
        />
      </Form>
      <Button onPress={handleSubmit(onSubmit)} disabled={!isValid}>
        Logga in
      </Button>
      <Divider>
        <Line />
        <DividerText>eller</DividerText>
      </Divider>
      <Button
        variant="ghost"
        IconLeft={() => <Icon name="facebook" />}
        onPress={auth0LoginScreen}
      >
        Fortsätt med Facebook
      </Button>
      <Button
        my={1}
        variant="ghost"
        IconLeft={() => <Icon name="google" />}
        onPress={auth0LoginScreen}
      >
        Fortsätt med Google
      </Button>
    </Layout>
  );
};
