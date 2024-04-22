import React from "react";
import styled from "styled-components";

const StyledCountInput = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const Count = styled.div`
  display: flex;
  min-width: 4rem;
  flex-direction: column;
  gap: 0.2rem;
  cursor: pointer;
`;

const CountInputIcon = styled.img`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;

const StyledInput = styled.input`
  text-align: center;
  width: 5rem;
`;

function CountInput({ label }: { label: string }) {
  return (
    <Count>
      <label htmlFor={`count-${label}`}>{label}</label>
      <StyledCountInput>
        <CountInputIcon src={"/add.svg"} alt="Add item" />
        <StyledInput id={`select-${label}`} value={5}></StyledInput>
        <CountInputIcon src={"/delete.svg"} alt="Delete item" />
      </StyledCountInput>
    </Count>
  );
}

export default CountInput;
