import React from "react";
import styled from "styled-components";
import type { Dispatch, SetStateAction } from "react";
import type { TourFilters } from "../../features/FilterMenu/FilterMenuData";

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
  step,
  filter,
  translation,
  filterConfig,
  setFilterConfig,
}: {
  label: string;
  boundries: number[];
  step: number;
  filter: string;
  translation?: any;
  filterConfig: TourFilters;
  setFilterConfig: Dispatch<SetStateAction<TourFilters>>;
}) {
  return (
    <Count>
      <label htmlFor={`count-${label}`}>{label}</label>
      <StyledCountInput>
        <CountInputIcon
          src={"/add.svg"}
          alt="Add item"
          onClick={() => {
            if (!translation && filterConfig[filter] < boundries[1]) {
              const newConfig = { ...filterConfig };
              newConfig[filter] = filterConfig[filter] + step;
              return setFilterConfig(newConfig);
            }
            const current = Object.values(translation).find(
              (el: typeof translation) => el.includes(filterConfig[filter])
            );
            const currentIndex = Object.values(translation).indexOf(current);
            if (currentIndex < boundries[1]) {
              const newConfig = { ...filterConfig };
              newConfig[filter] = Object.values(translation)[currentIndex + 1];
              return setFilterConfig(newConfig);
            }
          }}
        />
        <StyledInput
          id={`count-${label}`}
          type="string"
          name={`${label}`}
          readOnly
          value={String(filterConfig[filter]).replace(/\D/g, "")}
        ></StyledInput>
        <CountInputIcon
          src={"/delete.svg"}
          alt="Delete item"
          onClick={() => {
            if (filterConfig[filter] > boundries[0]) {
              const newConfig = { ...filterConfig };
              newConfig[filter] = filterConfig[filter] - step;
              return setFilterConfig(newConfig);
            }
            const current = Object.values(translation).find(
              (el: typeof translation) => el.includes(filterConfig[filter])
            );
            const currentIndex = Object.values(translation).indexOf(current);
            if (currentIndex > boundries[0]) {
              const newConfig = { ...filterConfig };
              newConfig[filter] = Object.values(translation)[currentIndex - 1];
              return setFilterConfig(newConfig);
            }
          }}
        />
      </StyledCountInput>
    </Count>
  );
}

export default CountInput;
