import React from "react";
import LoginForm from "../features/Login/LoginForm.tsx";
import {
  BackgroundPhoto,
  Container,
  LoginFormContainer,
} from "../features/Login/LoginStyles.tsx";

function Login() {
  return (
    <Container>
      <BackgroundPhoto src="/logInPhoto.jpg" alt="Bhudda statue" />
      <LoginFormContainer>
        <LoginForm></LoginForm>
      </LoginFormContainer>
    </Container>
  );
}

export default Login;
