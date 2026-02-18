import apiClient from "./api-client";
import { LoginCredentials, RegisterCredentials, AuthResponse } from "../types/user";

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/login", credentials);
    return data;
  },

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/register", credentials);
    return data;
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};