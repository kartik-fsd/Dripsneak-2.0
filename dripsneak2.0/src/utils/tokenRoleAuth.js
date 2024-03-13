import { jwtDecode } from "jwt-decode";

export const RoleAuth = (authToken) => {
  const userData = jwtDecode(authToken);
  return localStorage.setItem("role", userData.role);
};
