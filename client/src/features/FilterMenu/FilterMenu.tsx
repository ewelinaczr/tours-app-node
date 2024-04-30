import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Destination, Facilities } from "../../data/TourDetails.tsx";
import {
  tourGeneralInfo,
  tourDetailedInfo,
  filterButtons,
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

function FilterMenu({ size }: { size: number[] }) {
  const [turists, setTourists] = useState<number>(1);
  const [duration, setDuration] = useState<number>(7);
  const [destinations, setDestinations] = useState<number[]>([]);
  const [facilities, setFacilities] = useState<number[]>([]);
  const { handleSubmit, register } = useForm<String>();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onReset = () => {
    setTourists(1);
    setDuration(7);
    setDestinations([]);
    setFacilities([]);
  };

  function renderDestinations() {
    return (
      <FilterInputs>
        {Object.values(Destination).map((country, index) => (
          <Checkbox
            key={`destination-${index}`}
            index={index}
            text={country}
            selected={destinations}
            setSelected={setDestinations}
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
            itemCount={index === 0 ? turists : duration}
            setItemCount={index === 0 ? setTourists : setDuration}
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
            index={index}
            text={facility}
            selected={facilities}
            setSelected={setFacilities}
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
            onReset={() => onReset()}
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
