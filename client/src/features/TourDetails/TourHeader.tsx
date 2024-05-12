import React from "react";
import styled from "styled-components";
import type { Tour } from "../../data/TourInterfase.tsx";

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

const Title = styled.span`
  font-size: 2.4rem;
  font-weight: bold;
`;

const Price = styled.span`
  font-weight: bold;
`;

export const Subtitle = styled.div`
  color: var(--color-brand-purple);
  font-family: Boby;
`;
export const Favorite = styled.img`
  position: absolute;
  display: flex;
  right: 1.4rem;
  top: 1.4rem;
  height: 2.2rem;
  width: 2.2rem;
`;

function TourHeader({ data }: { data: Tour }) {
  return (
    <StyledColumn>
      <StyledRow>
        <Title>{data.destination}</Title>
        <Favorite src="/heart.svg" alt="Favorite tour" />
      </StyledRow>
      <StyledRow>
        <Subtitle>{data.subTitle}</Subtitle>
        <span>
          <Price>{data.price}</Price> $ per person
        </span>
      </StyledRow>
    </StyledColumn>
  );
}

export default TourHeader;
