import React from "react";
import styled from "styled-components";
import {
  getButtonHighlight,
  getIconHighlight,
} from "../utils/getButtonHighlight";
import type { NavigationButton } from "./Header";

const StyledButton = styled.button<{ $highlighted: boolean }>`
  padding: 0 1.8rem 0 1.6rem;
  gap: 0.6rem;
  ${(props) => props.$highlighted && getButtonHighlight()}
`;

const StyledIcon = styled.img<{ $highlighted: boolean; $height: string }>`
  height: ${(props) => props.$height};
  color: var(--color-brand-purple);
  ${(props) => props.$highlighted && getIconHighlight()}
`;

function Button({
  content,
  highlighted,
}: {
  content: NavigationButton;
  highlighted: boolean;
}) {
  return (
    <StyledButton $highlighted={highlighted}>
      <StyledIcon
        $highlighted={highlighted}
        $height={content.height}
        src={content.icon}
        alt="Action bar icon"
      />
      {content.text}
    </StyledButton>
  );
}

export default Button;
