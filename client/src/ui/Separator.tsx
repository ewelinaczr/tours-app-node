import React from "react";
import styled from "styled-components";

const StyledSeparator = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 0.1rem;
  background: linear-gradient(
    90deg,
    var(--color-brand-purple),
    var(--color-brand-green)
  );
`;

function Separator() {
  return <StyledSeparator></StyledSeparator>;
}

export default Separator;
