import React from "react";
import styled from "styled-components";

const Despription = styled.p`
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 2rem;
`;

const Advantage = styled.p`
  display: block;
`;

const Title = styled.h4`
  color: var(--color-brand-purple);
  font-weight: bold;
  margin-bottom: 1rem;
`;

function HotelDescription({ description, advantages }) {
  return (
    <>
      <Title>Description</Title>
      <Despription>{description}</Despription>
      <div>
        {advantages.map((advantage, index) => (
          <Advantage key={`advantafe-${index}`}>{advantage}</Advantage>
        ))}
      </div>
    </>
  );
}

export default HotelDescription;
