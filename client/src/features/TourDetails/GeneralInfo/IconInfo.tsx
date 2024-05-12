import React from "react";
import styled from "styled-components";
import type { Tour } from "../../../data/TourInterfase";

const generalInfo = [
  {
    label: "start",
    iconSrc: "callendar.svg",
    iconAlt: "Tour start date icon",
    dataSource: "startDates",
  },

  {
    label: "duration",
    iconSrc: "clock.svg",
    iconAlt: "Tour duration icon",
    dataSource: "duration",
  },
  {
    label: "weather",
    iconSrc: "sun.svg",
    iconAlt: "Local weather icon",
    dataSource: "weather",
  },
  {
    label: "group size",
    iconSrc: "group.svg",
    iconAlt: "group size icon",
    dataSource: "groupSize",
  },
  {
    label: "flight",
    iconSrc: "plane.svg",
    iconAlt: "Flight duration icon",
    dataSource: "flyghtduration",
  },
  {
    label: "reviews",
    iconSrc: "star.svg",
    iconAlt: "Tour rating icon",
    dataSource: "rating",
    dataSourceAdditional: "ratingQuantity",
  },
  {
    label: "distance",
    iconSrc: "distance.svg",
    iconAlt: "Distance icon",
    dataSource: "distance",
  },
  {
    label: "difficulty",
    iconSrc: "difficulty.svg",
    iconAlt: "Tour difficulty icon",
    dataSource: "difficulty",
  },
];

const StyledRow = styled.div`
  display: flex;
  align-items: start;
  justify-content: left;
  gap: 1rem;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Label = styled.p`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: var(--color-brand-purple);
`;

const Icon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  margin-top: 2rem;
`;

const InfoIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 3rem;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

function IconInfo({ tour }: { tour: Tour }) {
  function renderIcon(data) {
    const properties: string[] = [tour[data.dataSource]].flat(2);
    return (
      <StyledRow>
        <Icon src={`/${data.iconSrc}`} alt={`${data.iconAlt}`} />
        <StyledColumn>
          <Label>{data.label}</Label>
          {properties.map((prop) => {
            if (!data.dataSourceAdditional) {
              return <p>{prop}</p>;
            }
            return (
              <div>
                {prop} {`(${tour[data.dataSourceAdditional]})`}
              </div>
            );
          })}
        </StyledColumn>
      </StyledRow>
    );
  }

  return (
    <InfoContainer>
      <InfoIcons>{generalInfo.map((info) => renderIcon(info))}</InfoIcons>
    </InfoContainer>
  );
}

export default IconInfo;
