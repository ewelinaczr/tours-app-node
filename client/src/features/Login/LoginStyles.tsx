import styled from "styled-components";
import { Link } from "react-router-dom";

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
export const Form = styled.form`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

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
