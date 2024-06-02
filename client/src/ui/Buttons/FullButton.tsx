import React from "react";
import styled from "styled-components";
import {
  getButtonInvisible,
  getButtonPrimary,
  getButtonSecondary,
} from "../../styles/getButtonStyle.ts";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  INVISIBLE = " invisible",
}

const StyledButton = styled.button<{ $style: string }>`
  width: fit-content;
  ${(props) => props.$style === ButtonType.PRIMARY && getButtonPrimary()}
  ${(props) => props.$style === ButtonType.SECONDARY && getButtonSecondary()}
  ${(props) => props.$style === ButtonType.INVISIBLE && getButtonInvisible()}
`;

const Icon = styled.img`
  padding-left: 1rem;
`;

function FullButton({
  label,
  iconSrc,
  type,
  style,
  onReset,
  onSubmit,
  disabled,
}: {
  label: string;
  iconSrc?: string;
  type: "submit" | "reset" | "button";
  style: ButtonType;
  onReset?: () => void | undefined;
  onSubmit?: () => void | undefined;
  disabled: boolean;
}) {
  return (
    <StyledButton
      $style={style}
      type={type}
      disabled={disabled}
      onClick={type === "reset" ? onReset : onSubmit}
    >
      {label}
      {iconSrc ? <Icon src={`/${iconSrc}`} alt="Complete button icon" /> : null}
    </StyledButton>
  );
}

export default FullButton;
