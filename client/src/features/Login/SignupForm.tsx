import React from "react";
import { useState } from "react";
import { ButtonType } from "../../ui/Buttons/FullButton.tsx";
import {
  StyledInput,
  Form,
  Greeting,
  Message,
  Icon,
  ForgotPassword,
  SignUp,
} from "./LoginStyles.tsx";

import FullButton from "../../ui/Buttons/FullButton.tsx";
import useLogin from "./useLogin.tsx";

function FormInput({ label, children }) {
  return (
    <StyledInput>
      <label htmlFor={children.props.id}>{label}</label>
      {children}
    </StyledInput>
  );
}

function SignupForm() {
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
        <Greeting>Let's get started!</Greeting>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormInput>
        <FormInput label="Confirm Password">
          <input
            type="password"
            id="password"
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
          label={"Sign up"}
          type={"submit"}
          style={ButtonType.PRIMARY}
        ></FullButton>
        <ForgotPassword to={"/users/forgotPassword"}></ForgotPassword>
        <p>
          Already have an account?
          <SignUp to={"/signup"}>LOG IN</SignUp>
        </p>
      </Form>
    </>
  );
}

export default SignupForm;
