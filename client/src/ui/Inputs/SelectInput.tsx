import React from "react";
import styled from "styled-components";
import type { UseFormRegister } from "react-hook-form";

const Select = styled.div`
  display: flex;
  min-width: 4rem;
  flex-direction: column;
  gap: 0.2rem;
  cursor: pointer;
`;

function SelectInput({
  id,
  label,
  options,
  register,
}: {
  id: string;
  label: string;
  options: string[];
  register: UseFormRegister<any>;
}) {
  return (
    <Select>
      <label htmlFor={`select-${label}`}>{label}</label>
      <select id={`select-${label}`} {...register(`${id}`, {})}>
        {options.map((option, index) => (
          <option key={`option-${index}`}>{option}</option>
        ))}
      </select>
    </Select>
  );
}

export default SelectInput;
