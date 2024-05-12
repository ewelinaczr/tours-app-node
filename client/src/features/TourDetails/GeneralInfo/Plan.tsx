import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { css } from "styled-components";

const PlanItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlanItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-grey-0);
`;

const StyledRow = styled.div`
  display: flex;
  align-items: start;
  justify-content: left;
  gap: 1rem;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h4`
  color: var(--color-brand-purple);
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 2rem;
  background-color: var(--color-brand-purple);
  color: white;
  font-weight: normal;
  font-size: 1.2rem;
`;

const Arrow = styled.img<{ $selected: boolean }>`
  ${(props) =>
    props.$selected &&
    css`
      filter: invert(42%) sepia(61%) saturate(3061%) hue-rotate(232deg)
        brightness(96%) contrast(97%);
      transform: rotate(180deg);
    `}
`;

const AdditionalDescription = styled.p<{ $selected: boolean }>`
  ${(props) =>
    !props.$selected &&
    css`
      display: none;
    `}
`;

function Plan({
  plan,
  attractions,
}: {
  plan: string[];
  attractions: string[];
}) {
  const [selectedPlanItem, setSelectedPlanItem] = useState<number | undefined>(
    undefined
  );
  console.log("plan", plan);
  function handleSelect(index: number) {
    setSelectedPlanItem(index === selectedPlanItem ? undefined : index);
  }

  function renderPlanItem(item: string, index: number, type: string) {
    return (
      <PlanItem key={`${type}-${index}`}>
        <StyledRow>
          <Day>{index}</Day>
          <StyledColumn>
            <p>{item}</p>
            <AdditionalDescription $selected={index === selectedPlanItem}>
              {type} {index} full description...
            </AdditionalDescription>
          </StyledColumn>
        </StyledRow>
        <Arrow
          $selected={index === selectedPlanItem}
          src="/arrowDown.svg"
          alt="Show plan item icon"
          onClick={() => handleSelect(index)}
        ></Arrow>
      </PlanItem>
    );
  }

  function renderPlan() {
    if (!plan.length) {
      return;
    }
    return (
      <>
        <Title>Tour Plan</Title>
        <PlanItemContainer>
          {plan.map((item, index) => renderPlanItem(item, index + 1, "Day"))}
        </PlanItemContainer>
      </>
    );
  }

  function renderAttractions() {
    return (
      <>
        <Title>Tour Attractions</Title>
        <PlanItemContainer>
          {attractions.map((item, index) =>
            renderPlanItem(item, index + 1, "Attraction")
          )}
        </PlanItemContainer>
      </>
    );
  }

  return (
    <>
      {plan.length ? renderPlan() : null}
      {attractions.length ? renderAttractions() : null}
    </>
  );
}

export default Plan;
