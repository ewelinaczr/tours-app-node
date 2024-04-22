import React from "react";
import styled from "styled-components";
import {
  getButtonPrimary,
  getButtonSecondary,
} from "../../utils/getButtonHighlight";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const StyledButton = styled.button<{ $type: string }>`
  ${(props) => props.$type === ButtonType.PRIMARY && getButtonPrimary()}
  ${(props) => props.$type === ButtonType.SECONDARY && getButtonSecondary()}
`;

function FullButton({ label, type }: { label: string; type: string }) {
  return <StyledButton $type={type}>{label}</StyledButton>;
}

export default FullButton;
