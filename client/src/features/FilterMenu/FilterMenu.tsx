import React from "react";
import styled from "styled-components";
import {
  tourGeneralInfo,
  tourDetailedInfo,
  tourFacilities,
  filterButtons,
} from "./FilterMenuData.tsx";
import type { Tour } from "../../data/TourInterfase.tsx";

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

const StyledFilterMenu = styled.div<{ $size: number[] }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 4rem;
  padding-bottom: 4.6rem;
  background-color: white;
  border-radius: 4px;
  width: ${(props) => props.$size[0]}px;
  min-width: ${(props) => props.$size[0]}px;
  height: ${(props) => props.$size[1]}px;
  min-height: ${(props) => props.$size[1]}px;
`;

function FilterMenu({ tours, size }: { tours: Tour[]; size: number[] }) {
  function getDestinations(): string[] {
    const uniqueDestinations = new Set<string>();
    tours.map((tour) => uniqueDestinations.add(tour.destination));
    return [...uniqueDestinations.values()];
  }

  function renderDestinations() {
    return (
      <FilterInputs>
        {getDestinations()?.length &&
          getDestinations().map((destination, index) => (
            <Checkbox
              selected={true}
              key={`destination-${index}`}
              text={destination}
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
            label={tourDetails.label}
            options={tourDetails.options}
          />
        ))}
      </FilterInputs>
    );
  }

  function renderFacilities() {
    return (
      <FilterInputs>
        {tourFacilities.map((destination, index) => (
          <Checkbox
            key={`facilities-${index}`}
            selected={true}
            text={destination}
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
            type={button.type}
          />
        ))}
      </FilterInputs>
    );
  }

  return (
    <StyledFilterMenu $size={size}>
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
