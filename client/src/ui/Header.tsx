import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Button from "./Button.tsx";

export interface NavigationButton {
  icon: string;
  text: string;
  height: string;
}

export const NavigationButtons: NavigationButton[] = [
  {
    icon: "/globe.svg",
    text: "Tours",
    height: "1.8rem",
  },
  {
    icon: "/profile.svg",
    text: "Profile",
    height: "1.6rem",
  },
  {
    icon: "/cart.svg",
    text: "Cart",
    height: "1.8rem",
  },
];

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  align-items: start;
  padding: 2rem 6rem;
`;

const StyledNavigationBar = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function Header() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>(0);

  return (
    <StyledHeader>
      <StyledNavigationBar>
        {NavigationButtons.map((button, index) => (
          <Button
            key={`navigation-button-${index}`}
            highlighted={index === selectedButtonIndex}
            content={button}
          />
        ))}
      </StyledNavigationBar>
    </StyledHeader>
  );
}

export default Header;
