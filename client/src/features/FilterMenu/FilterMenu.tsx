import React from "react";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Destination, Duration, Facilities } from "../../data/TourDetails.tsx";
import {
  tourGeneralInfo,
  tourDetailedInfo,
  filterButtons,
  TourFilters,
} from "./FilterMenuData.tsx";

import CountInput from "../../ui/Inputs/CountInput.tsx";
import SelectInput from "../../ui/Inputs/SelectInput.tsx";
import Checkbox from "../../ui/Inputs/Checkbox.tsx";
import FullButton from "../../ui/Buttons/FullButton.tsx";

const FilterInputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 1rem;
  justify-content: space-between;
  align-items: space-between;
`;

const StyledFilterMenu = styled.form<{ $size: number[] }>`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 4rem;
  padding-bottom: 4.6rem;
  background-color: white;
  border-radius: 4px;
  font-size: 1.4rem;
  width: ${(props) => props.$size[0]}px;
  min-width: ${(props) => props.$size[0]}px;
  height: ${(props) => props.$size[1]}px;
  min-height: ${(props) => props.$size[1]}px;
`;

export const initialFilters: TourFilters = {
  turists: 1,
  destination: [],
  facilities: [],
  startDates: undefined,
  airport: undefined,
  tourType: undefined,
  meals: undefined,
  duration: undefined,
};

function FilterMenu({
  size,
  setFilters,
}: {
  size: number[];
  setFilters: Dispatch<SetStateAction<TourFilters>>;
}) {
  const { handleSubmit, register } = useForm<String>();
  const [filterConfig, setFilterConfig] = useState<TourFilters>(initialFilters);

  const onSubmit = (data) => {
    const filters: TourFilters = { ...filterConfig, ...data };
    setFilters(filters);
  };

  const onReset = () => {
    setFilterConfig(initialFilters);
  };

  function renderDestinations() {
    return (
      <FilterInputs>
        {Object.values(Destination).map((country, index) => (
          <Checkbox
            key={`destination-${index}`}
            label={country}
            filter={"destination"}
            filterConfig={filterConfig}
            setFilterConfig={setFilterConfig}
          />
        ))}
      </FilterInputs>
    );
  }

  function renderGuestsDurationInputs() {
    return (
      <FilterInputs>
        {tourGeneralInfo.map((tourDetails, index) => (
          <CountInput
            key={`tour-general-info-${index}`}
            label={tourDetails.label}
            boundries={tourDetails.boundries}
            step={tourDetails.step}
            filter={index === 0 ? "turists" : "duration"}
            translation={index === 0 ? undefined : Duration}
            filterConfig={filterConfig}
            setFilterConfig={setFilterConfig}
          />
        ))}
      </FilterInputs>
    );
  }

  function renderTourDetailsInputs() {
    return (
      <FilterInputs>
        {tourDetailedInfo.map((tourDetails, index) => (
          <SelectInput
            key={`tour-details-${index}`}
            id={tourDetails.id}
            label={tourDetails.label}
            options={tourDetails.options}
            register={register}
          />
        ))}
      </FilterInputs>
    );
  }

  function renderFacilities() {
    return (
      <FilterInputs>
        {Object.values(Facilities).map((facility, index) => (
          <Checkbox
            key={`facilities-${index}`}
            label={facility}
            filter={"facilities"}
            filterConfig={filterConfig}
            setFilterConfig={setFilterConfig}
          />
        ))}
      </FilterInputs>
    );
  }

  function renderButtons() {
    return (
      <FilterInputs>
        {filterButtons.map((button, index) => (
          <FullButton
            key={`filter-button-${index}`}
            label={button.label}
            style={button.style}
            type={button.type}
            onReset={() => button.type === "reset" && onReset()}
          />
        ))}
      </FilterInputs>
    );
  }

  return (
    <StyledFilterMenu $size={size} onSubmit={handleSubmit(onSubmit)}>
      <h4>Destination</h4>
      {renderDestinations()}
      <h4>General Info</h4>
      {renderTourDetailsInputs()}
      {renderGuestsDurationInputs()}
      <h4>Facilities</h4>
      {renderFacilities()}
      {renderButtons()}
    </StyledFilterMenu>
  );
}

export default FilterMenu;
