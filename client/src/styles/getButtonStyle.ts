import { css } from "styled-components";

export function getButtonHighlight() {
  return css`
    color: var(--color-brand-purple);
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

export function getButtonPrimary() {
  return css`
    color: white;
    padding: 0 2rem;
    background: linear-gradient(
      90deg,
      var(--color-brand-purple),
      var(--color-brand-green)
    );
    border: none;
  `;
}

export function getButtonSecondary() {
  return css`
    border: 2px solid var(--color-brand-purple);
    color: var(--color-brand-purple);
  `;
}
