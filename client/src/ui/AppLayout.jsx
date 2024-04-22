import React from "react";
import { Outlet } from "react-router-dom";

import NavigationBar from "./NavigationBar.tsx";

function AppLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default AppLayout;
