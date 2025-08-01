import React from "react";
import { useForm } from "react-hook-form";
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
import useSignUp from "./loginHooks/useSignUp.tsx";

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { signUp, isPending, error } = useSignUp();

  function onSubmit(data) {
    signUp(data);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Greeting>Let's get started!</Greeting>
        <FormInput
          label="Full name"
          error={errors.name && String(errors.name.message)}
        >
          <input
            type="text"
            id="name"
            disabled={isPending}
            {...register("name", { required: "This filed is required" })}
          />
        </FormInput>
        <FormInput
          label="Email"
          error={errors.email && String(errors.email.message)}
        >
          <input
            type="email"
            id="email"
            disabled={isPending}
            {...register("email", {
              required: "This filed is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Please provide a valid email adress",
              },
            })}
          />
        </FormInput>
        <FormInput
          label="Password (min 8 characters)"
          error={errors.password && String(errors.password.message)}
        >
          <input
            type="password"
            id="password"
            disabled={isPending}
            {...register("password", {
              required: "This filed is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
        </FormInput>
        <FormInput
          label="Confirm Password"
          error={
            errors.passwordConfirm && String(errors.passwordConfirm.message)
          }
        >
          <input
            type="password"
            id="passwordConfirm"
            disabled={isPending}
            {...register("passwordConfirm", {
              required: "This filed is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormInput>
        <Message>{error && <ErrorMessage error={error} />}</Message>
        <FullButton
          label={"Sign up"}
          type={"submit"}
          style={ButtonType.PRIMARY}
          disabled={isPending}
        ></FullButton>
        <ForgotPassword to={"/users/forgotPassword"}></ForgotPassword>
        <p>
          Already have an account?
          <SignUp to={"/login"}>LOG IN</SignUp>
        </p>
      </Form>
    </>
  );
}

export default SignupForm;
