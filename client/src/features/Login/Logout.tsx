import React from "react";
import FullButton, { ButtonType } from "../../ui/Buttons/FullButton.tsx";
import useLogout from "./useLogout.tsx";

function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <FullButton
      disabled={isPending}
      label={"Logout"}
      type={"submit"}
      style={ButtonType.PRIMARY}
      onSubmit={logout}
    ></FullButton>
  );
}

export default Logout;
