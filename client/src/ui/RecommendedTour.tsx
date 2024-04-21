import React from "react";
import {
  Favorite,
  StyledPreview,
  TourImage,
  renderLabels,
  renderTourInfo,
} from "./TourPreview.tsx";

function RecommendedTour({ tour }) {
  console.log(tour);
  return (
    <StyledPreview>
      <TourImage src={tour.photos[0]} alt="Tour preview" />
      <Favorite src="/heart.svg" alt="Favorite tour" />
      {renderLabels(tour)}
      {renderTourInfo(tour)}
    </StyledPreview>
  );
}

export default RecommendedTour;
