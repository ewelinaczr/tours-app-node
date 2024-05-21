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
    const response = await fetch(`api/v1/users/users/${id}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}
