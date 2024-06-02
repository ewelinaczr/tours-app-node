import styled from "styled-components";
import { Link } from "react-router-dom";

export const Avatar = styled.img`
  height: 8rem;
  width: 8rem;
  background-color: var(--color-grey-0);
  border-radius: 4rem;
  padding: 2rem;
`;

export const BackgroundPhoto = styled.img`
  width: 100%;
  background-size: contain;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  overflow: hidden;
  position: relative;
`;

export const LoginFormContainer = styled.div`
  background-color: white;
  padding: 6rem 4rem;
  border-radius: 0.6rem;
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
`;

export const FormNavContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Form = styled.form`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

export const Message = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  color: var(--color-accent-red);
  gap: 0.8rem;
  font-size: 1.4rem;
`;

export const Greeting = styled.h3`
  font-weight: normal;
  color: var(--color-brand-purple);
  font-family: Boby;
`;

export const SignUp = styled(Link)`
  font-weight: bold;
  color: var(--color-brand-purple);
  margin-left: 1rem;
`;

export const ForgotPassword = styled(Link)`
  font-size: 1.4rem;
  color: var(--color-grey-2);
`;

export const ProfileActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: fit-content;
  white-space: nowrap;
  border-right: 1px solid var(--color-grey-0);
  margin-right: 3rem;
  padding-right: 4rem;
`;

export const ProfileAction = styled.button`
  padding: 0;
  border: none;
  color: var(--color-brand-purple);
`;

export const FormTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 45rem;
  width: 35rem;
`;
