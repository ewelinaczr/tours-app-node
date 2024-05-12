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
  align-items: center;
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
  border: 1px solid var(--color-grey-2);
`;

function CountInput2({
  label,
  boundries,
  step,
  value,
  setValue,
}: {
  label: string;
  boundries: number[];
  step: number;
  value: number;
  setValue: any;
}) {
  return (
    <Count>
      <label htmlFor={`count-${label}`}>{label}</label>
      <StyledCountInput>
        <CountInputIcon
          src={"/add.svg"}
          alt="Add item"
          onClick={() => {
            if (value < boundries[1]) {
              setValue(step);
            }
          }}
        />
        <StyledInput
          id={`count-${label}`}
          type="number"
          name={`${label}`}
          readOnly
          value={value}
        ></StyledInput>
        <CountInputIcon
          src={"/delete.svg"}
          alt="Delete item"
          onClick={() => {
            if (value > boundries[0]) {
              setValue(-step);
            }
          }}
        />
      </StyledCountInput>
    </Count>
  );
}

export default CountInput2;
