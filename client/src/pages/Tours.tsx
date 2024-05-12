import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { getFilteredTours } from "../services/apiTours.ts";
import { TourFilters } from "../features/FilterMenu/FilterMenuData.tsx";
import { isAvailableIn } from "../utils/compareValues.ts";
import FilterMenu, {
  initialFilters,
} from "../features/FilterMenu/FilterMenu.tsx";
import type { Tour } from "../data/TourInterfase.tsx";

import Logo from "../ui/Logo.tsx";
import SearchInput from "../ui/Inputs/SearchInput.tsx";
import TourPreview from "../features/Tours/TourPreview.tsx";
import SortToursBar from "../features/Tours/SortToursBar.tsx";
import Spinner from "../ui/Spinner.tsx";

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
  const [filter, setFilter] = useState<TourFilters>(initialFilters);
  const [sortFilter, setSortFilter] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["tours-filtered", sortFilter],
    queryFn: async () => getFilteredTours(searchParams),
  });

  useLayoutEffect(() => {
    const container = document.getElementsByClassName("tour-0")[0];
    const menuWidthPx = container && container.clientWidth;
    const menuHeightPx = container && container.clientHeight;
    setFilterMenuSize([menuWidthPx, menuHeightPx]);
  }, []);

  function getTours(tours: Tour[]): Tour[] {
    return tours?.filter((tour) => {
      let fillsCriteria = true;
      Object.keys(filter).map((selectedFilter) => {
        if (!isAvailableIn(tour[selectedFilter], filter[selectedFilter])) {
          fillsCriteria = false;
          return false;
        }
        return true;
      });
      return fillsCriteria;
    });
  }

  function renderFilterMenu() {
    return <FilterMenu size={filterMenuSize} setFilters={setFilter} />;
  }

  function renderLoadingSpinner() {
    return <Spinner />;
  }

  function renderTours() {
    if (!data) return;

    const tours = getTours(data);
    if (!tours.length) {
      return <h1>No tours maching Your cryteria.</h1>;
    }
    return (
      <ToursGrid>
        {tours.map((tour, index) => (
          <TourContainer className={`tour-${index}`} key={`tour-${index}`}>
            <TourPreview tour={tour} offer={index === 0}></TourPreview>
          </TourContainer>
        ))}
        {filterMenuOpened && renderFilterMenu()}
      </ToursGrid>
    );
  }

  return (
    <Main>
      <Logo />
      <SearchInput
        highlighted={filterMenuOpened}
        openMenu={setFilterMenuOpened}
      ></SearchInput>
      <SortToursBar
        setParams={setSearchParams}
        setFilter={setSortFilter}
      ></SortToursBar>
      {isLoading || error || !data ? renderLoadingSpinner() : renderTours()}
    </Main>
  );
}

export default Tours;
