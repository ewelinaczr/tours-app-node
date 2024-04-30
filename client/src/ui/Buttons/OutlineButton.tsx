import React from "react";
import styled from "styled-components";
import {
  getButtonHighlight,
  getIconHighlight,
} from "../../styles/getButtonStyle.ts";

export interface ButtonWithIcon {
  icon: string;
  text: string;
  height: string;
  link: string;
}

const StyledButton = styled.button<{ $selected: boolean }>`
  padding: 0 1.8rem 0 1.6rem;
  gap: 0.6rem;
  ${(props) => props.$selected && getButtonHighlight()}
`;

const StyledIcon = styled.img<{ $selected: boolean; $height: string }>`
  height: ${(props) => props.$height};
  color: var(--color-brand-purple);
  ${(props) => props.$selected && getIconHighlight()}
`;

function OutlineButton({
  content,
  selected,
}: {
  content: ButtonWithIcon;
  selected: boolean;
}) {
  return (
    <StyledButton $selected={selected}>
      <StyledIcon
        $selected={selected}
        $height={content.height}
        src={content.icon}
        alt="Action bar icon"
      />
      {content.text}
    </StyledButton>
  );
}

export default OutlineButton;
