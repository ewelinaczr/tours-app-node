import React from "react";
import SignupForm from "../features/Login/SignupForm.tsx";
import {
  BackgroundPhoto,
  Container,
  LoginFormContainer,
} from "../features/Login/LoginStyles.tsx";

function Signup() {
  return (
    <Container>
      <BackgroundPhoto src="/logInPhoto.jpg" alt="Bhudda statue" />
      <LoginFormContainer>
        <SignupForm></SignupForm>
      </LoginFormContainer>
    </Container>
  );
}

export default Signup;
