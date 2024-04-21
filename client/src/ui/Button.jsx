import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 0 1.8rem 0 1.6rem;
  gap: 0.6rem;
  ${(props) =>
    props.highlighted &&
    css`
      color: var(--color-brand-purple);
      font-weight: 700;
      border-width: 2px;
      border-color: #0000;
      background: linear-gradient(white, white) padding-box,
        linear-gradient(
            90deg,
            var(--color-brand-purple),
            var(--color-brand-green)
          )
          border-box;
    `}
`;

const StyledImg = styled.img`
  height: ${(props) => props.height};
  color: var(--color-brand-purple);
  filter: ${(props) =>
    props.highlighted &&
    `invert(44%) sepia(74%) saturate(4233%) hue-rotate(236deg) brightness(100%) contrast(91%)`};
`;

function Button({ content, highlighted }) {
  return (
    <StyledButton highlighted={highlighted}>
      <StyledImg
        highlighted={highlighted}
        height={content.height}
        src={content.icon}
        alt="Action bar icon"
      />
      {content.text}
    </StyledButton>
  );
}

export default Button;
