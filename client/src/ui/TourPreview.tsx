import React from "react";
import styled from "styled-components";
import OfferLabel, { offerType } from "./OfferLabel.tsx";

export const StyledPreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: relative;
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
`;

export const TourImage = styled.img`
  display: flex;
  border-radius: 4px;
  aspect-ratio: ${(props) => (props.offer ? "" : 1)};
  height: ${(props) => (props.offer ? "100%" : "")};
  object-fit: cover;
`;

export const TourImageBlur = styled.img`
  display: block;
  border-radius: 4px;
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  background-color: grey;
  opacity: ${(props) => (props.offer ? 0 : 0.6)};
  &:hover {
    opacity: 0;
    cursor: pointer;
  }
`;

const Labels = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 0.2rem;
`;

export const Favorite = styled.img`
  position: absolute;
  display: flex;
  right: 1.4rem;
  top: 1.4rem;
  height: 2.2rem;
  width: 2.2rem;
`;

export const Slogan = styled.div`
  color: var(--color-accent-red);
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 10rem;
  font-family: Boby;
`;

export function renderLabels(tour) {
  return (
    <Labels>
      {tour.bestseller && <OfferLabel offerType={offerType.BESTSELLER} />}
      {tour.lastMinute && <OfferLabel offerType={offerType.LAST_MINUTE} />}
    </Labels>
  );
}

export function renderTourInfo(tour) {
  return (
    <StyledColumn>
      <StyledRow>
        <h4>{tour.destination}</h4>
        <Rating>
          <img src="/star.svg" alt="Favorite icon"></img>
          <p>{tour.rating}</p>
        </Rating>
      </StyledRow>
      <p>{tour.subTitle}</p>
    </StyledColumn>
  );
}

function TourPreview({ tour, offer }) {
  return (
    <StyledPreview>
      <TourImage src={tour.photos[0]} offer={offer} alt="Tour preview" />
      <TourImageBlur offer={offer} />
      <Favorite src="/heart.svg" alt="Favorite tour" />
      {offer && <Slogan>Speciall offer you can NOT miss!</Slogan>}
      {renderLabels(tour)}
      {renderTourInfo(tour)}
    </StyledPreview>
  );
}

export default TourPreview;
