import { axiosInstance } from "../axiosInstance";
import { DepartmentsResponse } from "../types";

const url = "/departments";

export const departmentServices = {
  getDepartments: async () => {
    try {
      const res = await axiosInstance.get<DepartmentsResponse[]>(`${url}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },
};
