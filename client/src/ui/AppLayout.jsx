import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header.tsx";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
