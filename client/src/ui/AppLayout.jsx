import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
