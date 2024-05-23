import React from "react";
import useUser from "../features/Login/useUser.tsx";
import Logout from "../features/Login/Logout.tsx";
import Spinner from "../ui/Spinner.tsx";

function Profile() {
  const { user, isLoading } = useUser();

  if (isLoading || !user) {
    return <Spinner />;
  }

  return (
    <div>
      <span>Hello {user.name}</span>
      <Logout></Logout>
    </div>
  );
}

export default Profile;
