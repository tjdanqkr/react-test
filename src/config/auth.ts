import { api } from "./api";

export const login = async (name: string, password: string) => {
  const data = await api("/api/auth/login", "POST", { name, password });
  return data;
};
export const signup = async (name: string, password: string) => {
  const data = await api("/api/auth/register", "POST", { name, password });
  return data;
};
