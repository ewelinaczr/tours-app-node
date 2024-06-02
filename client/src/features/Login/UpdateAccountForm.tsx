import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonType } from "../../ui/Buttons/FullButton.tsx";
import { Avatar, Form, Message, FormTitleContainer } from "./LoginStyles.tsx";
import {
  FormInput,
  ErrorMessage,
  SuccessMessage,
} from "../../ui/Inputs/FormInput.tsx";
import FullButton from "../../ui/Buttons/FullButton.tsx";
import useUpdateProfile from "./loginHooks/useUpdateProfile.tsx";
import FileInput from "../../ui/Inputs/FileInput.tsx";
import useUser from "./loginHooks/useUser.tsx";

function UpdateAccountForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { updateMy, isPending, error } = useUpdateProfile();
  const [avatar, setAvatar] = useState(null);
  const [success, setSuccess] = useState<boolean | undefined>(undefined);
  const { user } = useUser();

  function onSubmit(data) {
    const newData = {
      name: data.name.length ? data.name : user.name,
      email: data.email.length ? data.email : user.email,
      photo: data.photo?.length ? data.photo : user.photo,
    };
    updateMy(newData);
    setSuccess(!error);
    setTimeout(() => setSuccess(undefined), 2000);
  }

  return (
    <FormTitleContainer>
      <h5> {user.name}, update your account</h5>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Avatar src={user.photo ?? "./user.svg"}></Avatar>
        <FormInput
          label="Full name"
          error={errors.name && String(errors.name.message)}
        >
          <input
            type="text"
            id="name"
            placeholder={user.name}
            disabled={isPending}
            {...register("name")}
          />
        </FormInput>
        <FormInput
          label="Email"
          error={errors.email && String(errors.email.message)}
        >
          <input
            type="email"
            id="email"
            placeholder={user.email}
            disabled={isPending}
            {...register("email", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Please provide a valid email adress",
              },
            })}
          />
        </FormInput>
        <FormInput
          label="Avatar image"
          error={errors.email && String(errors.email.message)}
        >
          <FileInput
            id="avatar"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </FormInput>
        <Message>
          {error && <ErrorMessage error={error} />}
          {success && <SuccessMessage success={success} />}
        </Message>
        <FullButton
          label={"Update profile"}
          type={"submit"}
          style={ButtonType.PRIMARY}
          disabled={isPending}
        ></FullButton>
      </Form>
    </FormTitleContainer>
  );
}

export default UpdateAccountForm;
