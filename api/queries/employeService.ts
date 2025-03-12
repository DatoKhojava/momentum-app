import { axiosInstance } from "../axiosInstance";
import { EmployeesRequest, EmployeesResponse } from "../types";

const url = "/employees";

export const employeService = {
  getEmployees: async () => {
    try {
      const res = await axiosInstance.get<EmployeesResponse[]>(`${url}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },

  postEmployee: async (data: EmployeesRequest) => {
    try {
      await axiosInstance.post(`${url}`, data);
    } catch (error) {
      return error;
    }
  },
};
