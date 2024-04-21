import React from "react";
import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: blue;
  padding: 2vh 4.8vw 6.4vh;
`;

function SideBar() {
  return <StyledSideBar>SideBar</StyledSideBar>;
}

export default SideBar;
