import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTours } from "../services/apiTours";
import type { Tour } from "../data/TourInterfase.tsx";

import Logo from "../ui/Logo.tsx";
import SearchInput from "../ui/SearchInput.tsx";
import TourPreview from "../ui/TourPreview.tsx";

const Main = styled.div`
  display: flex;
  padding: 2rem 10rem;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
  position: absolute;
  top: 0;
`;

const ToursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2.4rem;
  row-gap: 1.4rem;
`;

const TourContainer = styled.div`
  display: flex;
`;

function Tours() {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(function () {
    getTours().then(({ data }) => {
      const offer = data.find((tour: Tour) => tour.lastMinute);
      const offerIndex = offer ? data.indexOf(offer) : 0;
      data.splice(offerIndex, 1);
      const newTours = [offer, ...data];
      setTours(newTours);
    });
  }, []);

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
      </ToursGrid>
    </Main>
  );
}

export default Tours;
