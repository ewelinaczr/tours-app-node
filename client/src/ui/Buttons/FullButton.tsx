import React from "react";
import styled from "styled-components";
import {
  getButtonPrimary,
  getButtonSecondary,
} from "../../styles/getButtonStyle.ts";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const StyledButton = styled.button<{ $style: string }>`
  ${(props) => props.$style === ButtonType.PRIMARY && getButtonPrimary()}
  ${(props) => props.$style === ButtonType.SECONDARY && getButtonSecondary()}
`;

function FullButton({
  label,
  type,
  style,
  onReset,
}: {
  label: string;
  type: "submit" | "reset" | "button";
  style: string;
  onReset: any;
}) {
  return (
    <StyledButton
      $style={style}
      type={type}
      onClick={(type = "reset" ? onReset : undefined)}
    >
      {label}
    </StyledButton>
  );
}

export default FullButton;
