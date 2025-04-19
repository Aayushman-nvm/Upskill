const URL = "https://upskill.up.railway.app/";

export async function checkAuth() {
  try {
    const response = await fetch(`${URL}/auth/check-auth`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to check authentication buddy!");
    }
    return await response.json();
  } catch (error) {
    console.error("Authenticatior error:\n", error);
    return { isAuthenticated: false };
  }
}

export async function logout() {
  try {
    await fetch(`${URL}/auth/logout`, {
      method: "GET",
      credentials: "include",
    });
    window.location.href = "/";
  } catch (error) {
    console.error("Logout error:", error);
  }
};
