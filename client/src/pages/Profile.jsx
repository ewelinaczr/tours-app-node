import React, { useState } from "react";
import {
  ProfileActions,
  BackgroundPhoto,
  Container,
  LoginFormContainer,
  FormNavContainer,
  ProfileAction,
} from "../features/Login/LoginStyles.tsx";

import Spinner from "../ui/Spinner.tsx";
import UpdatePasswordForm from "../features/Login/UpdatePasswordForm.tsx";
import UpdateAccountForm from "../features/Login/UpdateAccountForm.tsx";
import useUser from "../features/Login/loginHooks/useUser.tsx";
import useLogout from "../features/Login/loginHooks/useLogout.tsx";

function Profile() {
  const { user, isLoading } = useUser();
  const { logout } = useLogout();
  const [formToDisplay, setFormToDisplay] = useState(1);

  if (isLoading || !user) {
    return <Spinner />;
  }

  return (
    <>
      <Container>
        <BackgroundPhoto src="/logInPhoto.jpg" alt="Bhudda statue" />
        <LoginFormContainer>
          <FormNavContainer>
            <ProfileActions>
              <ProfileAction onClick={() => setFormToDisplay(1)}>
                Update profile
              </ProfileAction>
              <ProfileAction onClick={() => setFormToDisplay(2)}>
                Update password
              </ProfileAction>
              <ProfileAction onClick={() => logout()}>Logout</ProfileAction>
            </ProfileActions>
            {formToDisplay === 1 ? (
              <UpdateAccountForm />
            ) : (
              <UpdatePasswordForm />
            )}
          </FormNavContainer>
        </LoginFormContainer>
      </Container>
    </>
  );
}

export default Profile;
