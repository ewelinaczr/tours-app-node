import React from "react";
import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Facilities } from "../../data/TourDetails";
import { TourFilters } from "../../features/FilterMenu/FilterMenuData";

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
  text,
  selected,
  setSelected,
  test,
  setTest,
  filter,
}: {
  text: string;
  selected: any[];
  setSelected: Dispatch<SetStateAction<any[]>>;
  test: TourFilters;
  setTest: Dispatch<SetStateAction<TourFilters>>;
  filter: string;
}) {
  function handleClick(text: string): void {
    const newSelected = [...selected];
    // const newSelected = [...test[filter]];
    if (selected.includes(text)) {
      const indexToRemove = newSelected.indexOf(text);
      newSelected.splice(indexToRemove);
      return setSelected(newSelected);
    }
    // if (test[filter].includes(text)) {
    //   const indexToRemove = newSelected.indexOf(text);
    //   newSelected.splice(indexToRemove);
    //   console.log(indexToRemove);
    //   const a = { ...test };
    //   // delete a[filter];
    //   a[filter] = newSelected;
    //   return setTest(a);
    // }
    newSelected.push(text);
    setSelected(newSelected);
    // newSelected.push(text);
    // const a = { ...test };
    // a[filter] = newSelected;
    // setTest(a);
  }

  return (
    <Container>
      <CheckboxContainer
        id={`check-${text}`}
        type="checkbox"
        checked={selected.includes(text)}
        className={selected.includes(text) ? "checked" : ""}
        onChange={() => handleClick(text)}
      ></CheckboxContainer>
      <label htmlFor={`check-${text}`}>{text}</label>
    </Container>
  );
}

export default Checkbox;
