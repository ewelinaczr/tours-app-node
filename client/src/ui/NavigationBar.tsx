import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { ButtonWithIcon } from "./Buttons/OutlineButton.tsx";

import OutlineButton from "./Buttons/OutlineButton.tsx";

export const NavigationButtons: ButtonWithIcon[] = [
  {
    icon: "/globe.svg",
    text: "Tours",
    height: "1.8rem",
    link: "/",
  },
  {
    icon: "/profile.svg",
    text: "Profile",
    height: "1.6rem",
    link: "/profile",
  },
  {
    icon: "/profile.svg",
    text: "Login",
    height: "1.6rem",
    link: "/login",
  },
  {
    icon: "/cart.svg",
    text: "Cart",
    height: "1.8rem",
    link: "/cart",
  },
];

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  align-items: start;
  padding: 2rem 10rem;
`;

const StyledNavigationBar = styled.div`
  display: flex;
  gap: 1.2rem;
`;

function NavigationBar() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>(0);

  return (
    <StyledHeader>
      <StyledNavigationBar>
        {NavigationButtons.map((button, index) => (
          <NavLink to={button.link} key={`navigation-button-${index}`}>
            <OutlineButton
              index={index}
              selected={index === selectedButtonIndex}
              setSelected={setSelectedButtonIndex}
              content={button}
            />
          </NavLink>
        ))}
      </StyledNavigationBar>
    </StyledHeader>
  );
}

export default NavigationBar;
