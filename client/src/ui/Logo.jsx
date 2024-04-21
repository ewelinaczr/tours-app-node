import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  height: 4rem;
  width: auto;
`;

const StyledRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: start;
  justify-content: center;
`;

const StyledColumns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
`;

const StyledAppName = styled.span`
  width: auto;
  color: var(--color-brand-purple);
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2.4rem;
`;

const StyledAppSlogan = styled.span`
  width: auto;
  color: var(--color-grey-2);
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.4rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <StyledColumns>
        <StyledImg src={"/logo.png"} alt="Logo" />
        <StyledRows>
          <StyledAppName>Discover Asia</StyledAppName>
          <StyledAppSlogan>Where Heritage Meets Modernity</StyledAppSlogan>
        </StyledRows>
      </StyledColumns>
    </StyledLogo>
  );
}

export default Logo;
