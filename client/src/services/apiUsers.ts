export async function getMyProfile() {
  try {
    const response = await fetch("api/v1/users/me");
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUsers() {
  try {
    const response = await fetch("api/v1/users");
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUser(id) {
  try {
    const response = await fetch(`api/v1/users/${id}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateMyPassword(passwordData) {
  try {
    const response = await fetch("api/v1/users/updateMyPassword", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passwordData),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateMyProfile(profileData) {
  try {
    const response = await fetch("api/v1/users/updateMy", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteMyProfile() {
  try {
    const response = await fetch("api/v1/users/users/deleteMe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}
