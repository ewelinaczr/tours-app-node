import React from "react";
import styled from "styled-components";

const StyledDescription = styled.p`
  text-align: justify;
  text-justify: inter-word;
`;

const Title = styled.h4`
  color: var(--color-brand-purple);
  font-weight: bold;
  margin-bottom: 1rem;
`;

function Description({ description }: { description: string }) {
  console.log(description);
  return (
    <>
      <Title>Tour Descriptioin</Title>
      <StyledDescription>{description}</StyledDescription>
    </>
  );
}

export default Description;
