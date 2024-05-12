import React from "react";
import styled from "styled-components";

const SortBar = styled.div`
  width: 100%;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  cursor: pointer;
`;

const sortingFilters = [
  { title: "All Tours", params: "" },
  { title: "Popular", params: "bestseller=true" },
  { title: "Last Minute", params: "lastminute=true" },
  { title: "Best Rated", params: "sort=rating-desc" },
  { title: "Best Price", params: "sort=price" },
];

function SortToursAction({ title, setParams, setFilter, params }) {
  return (
    <span
      onClick={() => {
        setParams(params);
        setFilter(params);
      }}
    >
      {title}
    </span>
  );
}

function SortToursBar({ setParams, setFilter }) {
  return (
    <SortBar>
      {sortingFilters.map((filter, index) => (
        <SortToursAction
          key={`sort-action-${index}`}
          title={filter.title}
          setParams={setParams}
          setFilter={setFilter}
          params={filter.params}
        ></SortToursAction>
      ))}
    </SortBar>
  );
}

export default SortToursBar;
