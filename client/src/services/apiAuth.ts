export async function login(loginData) {
  try {
    const response = await fetch("api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function signUp() {
  try {
    const response = await fetch("api/v1/users/signup");
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function logout() {
  try {
    const response = await fetch("api/v1/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data.status;
  } catch (error) {
    throw new Error(error);
  }
}

export async function forgotPassword() {
  try {
    const response = await fetch("api/v1/users/forgotPassword");
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}
