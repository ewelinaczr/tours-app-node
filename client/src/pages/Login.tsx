import React from "react";
import styled from "styled-components";
import LoginForm from "../features/Login/LoginForm.tsx";

const BackgroundPhoto = styled.img`
  width: 100%;
  background-size: contain;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  overflow: hidden;
  position: relative;
`;

const LoginFormContainer = styled.div`
  background-color: white;
  padding: 6rem 4rem;
  border-radius: 0.6rem;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
`;

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
