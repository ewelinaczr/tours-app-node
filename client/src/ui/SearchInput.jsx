import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  padding-left: 3rem;
`;

const StyledFilterButton = styled.button`
  width: 3.6rem;
  ${(props) =>
    props.highlighted &&
    css`
      border-width: 2px;
      border-color: #0000;
      background: linear-gradient(white, white) padding-box,
        linear-gradient(
            90deg,
            var(--color-brand-purple),
            var(--color-brand-green)
          )
          border-box;
    `}
`;

const StyledImg = styled.img`
  height: 2.6rem;
  width: 2.6rem;
  filter: ${(props) =>
    props.highlighted &&
    `invert(44%) sepia(74%) saturate(4233%) hue-rotate(236deg) brightness(100%) contrast(91%)`};
`;

const StyledSearchImg = styled.img`
  height: 1.8rem;
  width: 1.8;
  position: absolute;
  top: 0.9rem;
  left: 0.8rem;
`;

const Search = styled.div`
  display: flex;
  gap: 0.6rem;
  position: relative;
`;

function SearchInput({ highlighted }) {
  return (
    <Search>
      <StyledInput></StyledInput>{" "}
      <StyledSearchImg src={"/search.svg"} alt="Search" />
      <StyledFilterButton highlighted={highlighted}>
        <StyledImg
          highlighted={highlighted}
          src={"/filters.svg"}
          alt="Filters"
        />
      </StyledFilterButton>
    </Search>
  );
}

export default SearchInput;
