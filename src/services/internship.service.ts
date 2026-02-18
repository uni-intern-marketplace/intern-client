import apiClient from "./api-client";
import { Internship } from "../types/internship";

export const internshipService = {
  async getAll(): Promise<Internship[]> {
    const { data } = await apiClient.get<Internship[]>("/internships");
    return data;
  },

  async getById(id: string): Promise<Internship> {
    const { data } = await apiClient.get<Internship>(`/internships/${id}`);
    return data;
  },

  async create(internshipData: Partial<Internship>): Promise<Internship> {
    const { data } = await apiClient.post<Internship>("/internships", internshipData);
    return data;
  }
};