import React from "react";
import styled from "styled-components";
import type { Dispatch, SetStateAction } from "react";
import type { TourFilters } from "../../features/FilterMenu/FilterMenuData";

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
  label,
  filter,
  filterConfig,
  setFilterConfig,
}: {
  label: string;
  filter: string;
  filterConfig: TourFilters;
  setFilterConfig: Dispatch<SetStateAction<TourFilters>>;
}) {
  function handleClick(label: string): void {
    const newSelected = [...filterConfig[filter]];
    if (filterConfig[filter].includes(label)) {
      const indexToRemove = newSelected.indexOf(label);
      newSelected.splice(indexToRemove);
    } else {
      newSelected.push(label);
    }

    const newConfig = { ...filterConfig };
    newConfig[filter] = newSelected;
    return setFilterConfig(newConfig);
  }

  return (
    <Container>
      <CheckboxContainer
        id={`check-${label}`}
        type="checkbox"
        checked={filterConfig[filter].includes(label)}
        className={filterConfig[filter].includes(label) ? "checked" : ""}
        onChange={() => handleClick(label)}
      ></CheckboxContainer>
      <label htmlFor={`check-${label}`}>{label}</label>
    </Container>
  );
}

export default Checkbox;
