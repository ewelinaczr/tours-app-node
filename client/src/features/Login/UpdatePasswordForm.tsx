import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonType } from "../../ui/Buttons/FullButton.tsx";
import { Form, Message, FormTitleContainer } from "./LoginStyles.tsx";
import {
  ErrorMessage,
  FormInput,
  SuccessMessage,
} from "../../ui/Inputs/FormInput.tsx";
import FullButton from "../../ui/Buttons/FullButton.tsx";
import useUpdatePassword from "./loginHooks/useUpdatePassword.tsx";
import useUser from "./loginHooks/useUser.tsx";

function UpdatePasswordForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { updatePassword, isPending, error } = useUpdatePassword();
  const [success, setSuccess] = useState<boolean | undefined>(undefined);
  const { user } = useUser();

  function onSubmit(data) {
    updatePassword(data);
    setSuccess(!error);
    setTimeout(() => setSuccess(undefined), 2000);
  }

  return (
    <FormTitleContainer>
      <h5>{user.name}, update your password</h5>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Current password"
          error={
            errors.passwordCurrent && String(errors.passwordCurrent.message)
          }
        >
          <input
            type="password"
            id="passwordCurrent"
            disabled={isPending}
            {...register("passwordCurrent", {
              required: "This filed is required",
            })}
          />
        </FormInput>
        <FormInput
          label="New password (min 8 characters)"
          error={errors.password && String(errors.password.message)}
        >
          <input
            type="password"
            id="password"
            disabled={isPending}
            {...register("password", {
              required: "This filed is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Please provide a valid email adress",
              },
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
        <Message>
          {error && <ErrorMessage error={error} />}
          {success && <SuccessMessage success={success} />}
        </Message>
        <FullButton
          label={"Update password"}
          type={"submit"}
          style={ButtonType.PRIMARY}
          disabled={isPending}
        ></FullButton>
      </Form>
    </FormTitleContainer>
  );
}

export default UpdatePasswordForm;
