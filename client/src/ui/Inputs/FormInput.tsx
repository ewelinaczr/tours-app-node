import React from "react";
import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Icon = styled.img`
  height: 1.4rem;
  width: 1.4rem;
`;

export const Message = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
`;

export const Error = styled.p`
  color: var(--color-notification-error);
`;

export const Success = styled.p`
  color: var(--color-notification-success);
`;

export function ErrorMessage({ error }) {
  const message = error.length ? error : "Incorrect data";
  return (
    <>
      <Icon src="/error.svg" alt="input error" />
      <Error>{message}</Error>
    </>
  );
}

export function SuccessMessage({ success }) {
  const message = success.length ? success : "Data changed";
  return (
    <>
      <Icon src="/success.svg" alt="input success" />
      <Success>{message}</Success>
    </>
  );
}

export function FormInput({
  label,
  error,
  success,
  children,
}: {
  label: string;
  error?: string;
  success?: string;
  children: any;
}) {
  return (
    <StyledInput>
      <label htmlFor={children.props.id}>{label}</label>
      {children}
      <Message>
        {error && <ErrorMessage error={error} />}
        {success && <SuccessMessage success={success} />}
      </Message>
    </StyledInput>
  );
}
