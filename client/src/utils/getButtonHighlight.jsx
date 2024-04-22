import { css } from "styled-components";

export function getButtonHighlight() {
  return css`
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
  `;
}

export function getIconHighlight() {
  return css`
    filter: invert(44%) sepia(74%) saturate(4233%) hue-rotate(236deg)
      brightness(100%) contrast(91%);
  `;
}
