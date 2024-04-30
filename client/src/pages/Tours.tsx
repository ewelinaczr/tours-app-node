import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { getTours } from "../services/apiTours.ts";
import { useQuery } from "@tanstack/react-query";
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

function Tours() {
  const [filterMenuSize, setFilterMenuSize] = useState<number[]>([0, 0]);
  const [filterMenuOpened, setFilterMenuOpened] = useState<boolean>(false);
  const { isLoading, data, error } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  useLayoutEffect(() => {
    const container = document.getElementsByClassName("tour-0")[0];
    const menuWidthPx = container && container.clientWidth;
    const menuHeightPx = container && container.clientHeight;
    setFilterMenuSize([menuWidthPx, menuHeightPx]);
  }, [data]);

  if (isLoading || !data) {
    return <h1>isLoading</h1>;
  }

  function renderFilterMenu(tours: Tour[]) {
    return <FilterMenu size={filterMenuSize} />;
  }

  return (
    <Main>
      <Logo />
      <SearchInput
        highlighted={filterMenuOpened}
        openMenu={setFilterMenuOpened}
      ></SearchInput>
      <ToursGrid>
        {data.map((tour, index) => (
          <TourContainer className={`tour-${index}`} key={`tour-${index}`}>
            <TourPreview tour={tour} offer={index === 0}></TourPreview>
          </TourContainer>
        ))}
        {filterMenuOpened && renderFilterMenu(data)}
      </ToursGrid>
    </Main>
  );
}

export default Tours;
