import React from "react";
import styled from "styled-components";
import {
  getButtonHighlight,
  getIconHighlight,
} from "../utils/getButtonHighlight";

const StyledInput = styled.input`
  padding-left: 3rem;
`;

const FilterButton = styled.button<{ $highlighted: boolean }>`
  width: 3.6rem;
  ${(props) => props.$highlighted && getButtonHighlight()}
`;

const FilterIcon = styled.img<{ $highlighted: boolean }>`
  height: 2.6rem;
  width: 2.6rem;
  ${(props) => props.$highlighted && getIconHighlight()}
`;

const SearchIcon = styled.img`
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
      <StyledInput />
      <SearchIcon src={"/search.svg"} alt="Search" />
      <FilterButton $highlighted={highlighted}>
        <FilterIcon
          $highlighted={highlighted}
          src={"/filters.svg"}
          alt="Filters"
        />
      </FilterButton>
    </Search>
  );
}

export default SearchInput;
