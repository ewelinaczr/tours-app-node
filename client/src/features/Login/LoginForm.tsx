import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonType } from "../../ui/Buttons/FullButton.tsx";

import FullButton from "../../ui/Buttons/FullButton.tsx";
import useLogin from "./useLogin.tsx";

const Form = styled.form`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Icon = styled.img`
  height: 1.4rem;
  width: 1.4rem;
`;

const Message = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  color: var(--color-accent-red);
  gap: 0.8rem;
  font-size: 1.4rem;
`;

const Greeting = styled.h3`
  font-weight: normal;
  color: var(--color-brand-purple);
  font-family: Boby;
`;

const SignUp = styled(Link)`
  font-weight: bold;
  color: var(--color-brand-purple);
  margin-left: 1rem;
`;

const ForgotPassword = styled(Link)`
  font-size: 1.4rem;
  color: var(--color-grey-2);
`;

function FormInput({ label, children }) {
  return (
    <StyledInput>
      <label htmlFor={children.props.id}>{label}</label>
      {children}
    </StyledInput>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Greeting>Welcome back!</Greeting>
        <FormInput label="Email">
          <input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
          />
        </FormInput>
        <FormInput label="Password">
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormInput>
        <Message>
          {error && (
            <>
              <Icon src="/error.svg" alt="input error" />
              Incorrect email or password
            </>
          )}
        </Message>
        <FullButton
          label={"Log in"}
          type={"submit"}
          style={ButtonType.PRIMARY}
        ></FullButton>
        <ForgotPassword to={"/users/forgotPassword"}>
          Forgot password?
        </ForgotPassword>
        <p>
          Don't have an account?
          <SignUp to={"/signup"}>SIGN UP</SignUp>
        </p>
      </Form>
    </>
  );
}

export default LoginForm;
