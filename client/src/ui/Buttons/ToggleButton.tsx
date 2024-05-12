import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Dot = styled.div<{ $active: boolean }>`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1rem;
  background-color: var(--color-grey-2);
  margin: 0 0.2rem;
  cursor: pointer;
  ${(prop) =>
    prop.$active &&
    css`
      background-color: var(--color-accent-red);
    `}
`;

const Container = styled.div<{ $active: boolean }>`
  height: 1.6rem;
  width: 3.2rem;
  border: 1px solid var(--color-grey-2);
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: ${(prop) => (prop.$active ? "right" : "left")};
`;

export function ToggleButton({
  itemIndex,
  itemValue,
  selectedItems,
  updateValue,
  updateSelectedItems,
}: {
  itemIndex: number;
  selectedItems: number[];
  itemValue: number;
  updateValue: any;
  updateSelectedItems: any;
}) {
  const handelClick = () => {
    updateSelectedItems(itemIndex);

    if (selectedItems.indexOf(itemIndex) === -1) {
      updateValue(itemValue);
    } else {
      updateValue(-itemValue);
    }
  };

  return (
    <Container
      $active={selectedItems.includes(itemIndex)}
      onClick={handelClick}
    >
      <Dot $active={selectedItems.includes(itemIndex)}></Dot>
    </Container>
  );
}

export default ToggleButton;
