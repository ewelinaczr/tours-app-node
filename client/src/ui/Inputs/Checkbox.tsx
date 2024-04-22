import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CheckboxContainer = styled.div`
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

const Selected = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: var(--color-brand-purple);
`;

function Checkbox({ selected, text }: { selected: boolean; text: string }) {
  return (
    <Container>
      <CheckboxContainer id={`check-${text}`}>
        {selected && <Selected />}
      </CheckboxContainer>
      <label htmlFor={`check-${text}`}> {text}</label>
    </Container>
  );
}

export default Checkbox;
