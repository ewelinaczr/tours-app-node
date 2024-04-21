import React, { useEffect, useState } from "react";
import TourPreview from "../ui/TourPreview.tsx";
import { getTours } from "../services/apiTours";
import Logo from "../ui/Logo";
import SearchInput from "../ui/SearchInput";
import styled from "styled-components";
import { Tour } from "../utils/TourInterfase.tsx";

function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(function () {
    getTours().then(({ data }) => {
      const offer = data.find((tour: Tour) => tour.lastMinute);
      const offerIndex = offer ? data.indexOf(offer) : 0;
      data.splice(offerIndex, 1);
      const newTours = [offer, ...data];
      setTours(newTours);
    });
  }, []);

  const Main = styled.div`
    display: flex;
    padding: 2rem 10rem;
    flex-direction: column;
    gap: 4rem;
    position: absolute;
    top: 0;
  `;

  const ToursGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 2.4rem;
    row-gap: 1.4rem;
    .tour-three {
      grid-column: 1;
      grid-row: 2 / 5;
    }
  `;

  const ToursSection = styled.div`
    display: flex;
    gap: 2.4rem;
  `;

  const TourContainer = styled.div`
    display: flex;
    gap: 2.4rem;
  `;

  return (
    <Main>
      <Logo />
      <SearchInput highlighted={true}></SearchInput>
      <ToursSection>
        <ToursGrid>
          {tours.map((tour, index) => (
            <TourContainer className={`tour-${index}`}>
              <TourPreview
                key={`tour-${index}`}
                tour={tour}
                offer={index === 0}
              ></TourPreview>
            </TourContainer>
          ))}
        </ToursGrid>
      </ToursSection>
    </Main>
  );
}

export default Tours;
