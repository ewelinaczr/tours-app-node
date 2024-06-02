import React from "react";
import { useState } from "react";
import { ButtonType } from "../../ui/Buttons/FullButton.tsx";
import { ErrorMessage, FormInput } from "../../ui/Inputs/FormInput.tsx";
import {
  Form,
  Greeting,
  Message,
  ForgotPassword,
  SignUp,
} from "./LoginStyles.tsx";
import FullButton from "../../ui/Buttons/FullButton.tsx";
import useLogin from "./loginHooks/useLogin.tsx";

function LoginForm() {
  const [email, setEmail] = useState("hollygibney@test.com");
  const [password, setPassword] = useState("hollygibneytest");
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
            disabled={isPending}
          />
        </FormInput>
        <Message>{error && <ErrorMessage error={error} />}</Message>
        <FullButton
          label={"Log in"}
          type={"submit"}
          disabled={isPending}
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
