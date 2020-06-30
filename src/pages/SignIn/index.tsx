import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/input';
import Button from '../../components/button';

import logoImg from '../../assets/logo.png';

import { Container, Title, ForgotPassword } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title> Faça seu Logon </Title>

      <Input name="email" icon="mail" placeholder="E-mail" />

      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('botao');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
