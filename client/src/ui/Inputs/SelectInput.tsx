import React from "react";
import styled from "styled-components";

const Select = styled.div`
  display: flex;
  min-width: 4rem;
  flex-direction: column;
  gap: 0.2rem;
  cursor: pointer;
`;

function SelectInput({ label, options }: { label: string; options: string[] }) {
  return (
    <Select>
      <label htmlFor={`select-${label}`}>{label}</label>
      <select name="label" id={`select-${label}`}>
        {options.map((option, index) => (
          <option key={`option-${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Select>
  );
}

export default SelectInput;
