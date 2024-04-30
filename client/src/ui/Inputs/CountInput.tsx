import React from "react";
import type { Dispatch, SetStateAction } from "react";
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

function CountInput({
  label,
  boundries,
  itemCount,
  setItemCount,
}: {
  label: string;
  boundries: number[];
  itemCount: number;
  setItemCount: Dispatch<SetStateAction<number>>;
}) {
  return (
    <Count>
      <label htmlFor={`count-${label}`}>{label}</label>
      <StyledCountInput>
        <CountInputIcon
          src={"/add.svg"}
          alt="Add item"
          onClick={() =>
            itemCount < boundries[1] && setItemCount(itemCount + 1)
          }
        />
        <StyledInput
          id={`count-${label}`}
          type="number"
          name={`${label}`}
          readOnly
          value={itemCount}
        ></StyledInput>
        <CountInputIcon
          src={"/delete.svg"}
          alt="Delete item"
          onClick={() =>
            itemCount > boundries[0] && setItemCount(itemCount - 1)
          }
        />
      </StyledCountInput>
    </Count>
  );
}

export default CountInput;
