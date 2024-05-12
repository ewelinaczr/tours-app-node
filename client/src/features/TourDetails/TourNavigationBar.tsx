import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { css } from "styled-components";

const navigatiobConfig = [
  {
    label: "General Info",
    link: "general-info",
  },
  {
    label: "Hotel",
    link: "hotel",
  },
  { label: "Excursions", link: "excursions" },
  { label: "Reviews", link: "reviews" },
];

const NavigationBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const Separtor = styled.div`
  width: 100%;
  height: 0.2rem;
  background: linear-gradient(
    90deg,
    var(--color-brand-purple),
    var(--color-brand-green)
  );
`;

const Link = styled(NavLink)<{ $selected: boolean }>`
  ${(props) =>
    props.$selected &&
    css`
      color: var(--color-brand-purple);
    `};
`;

function NavigationBarButton({ action, index, selected, setSelected }) {
  return (
    <Link
      to={action.link}
      $selected={index === selected}
      key={`navigation-button-${index}`}
      onClick={() => setSelected(index)}
    >
      {action.label}
    </Link>
  );
}

function TourNavigationBar() {
  const [selected, setSelected] = useState(0);

  return (
    <NavigationBar>
      <Actions>
        {navigatiobConfig.map((action, index) => (
          <NavigationBarButton
            key={`tour-info-tab--${index}`}
            action={action}
            index={index}
            selected={selected}
            setSelected={setSelected}
          ></NavigationBarButton>
        ))}
      </Actions>
      <Separtor />
    </NavigationBar>
  );
}

export default TourNavigationBar;
