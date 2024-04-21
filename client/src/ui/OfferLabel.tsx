import React from "react";
import styled from "styled-components";

export enum offerType {
  BESTSELLER = "Bestseller",
  LAST_MINUTE = "Last minute",
}

const StyledOfferLabel = styled.h5`
  width: fit-content;
  color: white;
  padding: 0.1rem 1rem;
  border-radius: 0.4rem;
  background-color: ${(props) =>
    props.type === offerType.BESTSELLER
      ? `var(--color-brand-green)`
      : `var(--color-brand-purple)`};
`;

function OfferLabel({ offerType }) {
  return <StyledOfferLabel type={offerType}>{offerType}</StyledOfferLabel>;
}

export default OfferLabel;
