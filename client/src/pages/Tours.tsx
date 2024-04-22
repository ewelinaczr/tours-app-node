import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTours } from "../services/apiTours";
import type { Tour } from "../data/TourInterfase.tsx";

import Logo from "../ui/Logo.tsx";
import SearchInput from "../ui/Inputs/SearchInput.tsx";
import TourPreview from "../features/Tours/TourPreview.tsx";
import FilterMenu from "../features/FilterMenu/FilterMenu.tsx";

const Main = styled.div`
  display: flex;
  padding: 2rem 10rem;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
  position: relative;
`;

const ToursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2.4rem;
  row-gap: 1.4rem;
  position: relative;
`;

const TourContainer = styled.div`
  display: flex;
`;

const FilterPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

function Tours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [filterMenuSize, setFilterMenuSize] = useState<number[]>([0, 0]);

  useEffect(function () {
    getTours().then(({ data }) => {
      const offer = data.find((tour: Tour) => tour.lastMinute);
      const offerIndex = offer ? data.indexOf(offer) : 0;
      data.splice(offerIndex, 1);
      const newTours = [offer, ...data];
      setTours(newTours);
    });
  }, []);

  function renderFilterMenu() {
    const container = document.getElementsByClassName("tour-0")[0];
    const menuWidthPx = container && container.clientWidth;
    const menuHeightPx = container && container.clientHeight;

    (menuWidthPx !== filterMenuSize[0] || menuHeightPx !== filterMenuSize[1]) &&
      setFilterMenuSize([menuWidthPx, menuHeightPx]);

    return (
      <FilterPanel>
        <FilterMenu tours={tours} size={filterMenuSize} />
      </FilterPanel>
    );
  }

  return (
    <Main>
      <Logo />
      <SearchInput highlighted={true}></SearchInput>
      <ToursGrid>
        {tours.map((tour, index) => (
          <TourContainer className={`tour-${index}`} key={`tour-${index}`}>
            <TourPreview tour={tour} offer={index === 0}></TourPreview>
          </TourContainer>
        ))}
        {renderFilterMenu()}
      </ToursGrid>
    </Main>
  );
}

export default Tours;
