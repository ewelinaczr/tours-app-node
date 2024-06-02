import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border: none;
  padding: 0;
  border-radius: 0;

  &::file-selector-button {
    height: inherit;
    border: 2px solid var(--color-brand-purple);
    border-radius: 0.4rem;
    color: var(--color-brand-purple);
    padding: 0 1.4rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export default FileInput;
