import React from "react";
import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CheckboxContainer = styled.input`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 2rem;
  height: 2rem;
  border-color: var(--color-grey-1);
  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function Checkbox({
  index,
  text,
  selected,
  setSelected,
}: {
  index: number;
  text: string;
  selected: number[];
  setSelected: Dispatch<SetStateAction<number[]>>;
}) {
  function handleClick(index: number): void {
    const newSelected = [...selected];
    if (selected.includes(index)) {
      const indexToRemove = newSelected.indexOf(index);
      newSelected.splice(indexToRemove);
      return setSelected(newSelected);
    }
    newSelected.push(index);
    setSelected(newSelected);
  }

  return (
    <Container>
      <CheckboxContainer
        id={`check-${text}`}
        type="checkbox"
        checked={selected.includes(index)}
        className={selected.includes(index) ? "checked" : ""}
        onChange={() => handleClick(index)}
      ></CheckboxContainer>
      <label htmlFor={`check-${text}`}>{text}</label>
    </Container>
  );
}

export default Checkbox;
