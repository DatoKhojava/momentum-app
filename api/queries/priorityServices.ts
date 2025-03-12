import { axiosInstance } from "../axiosInstance";
import { PrioritiesResponse } from "../types";

const url = "/priorities";

export const priorityServices = {
  getPriorities: async () => {
    try {
      const res = await axiosInstance.get<PrioritiesResponse[]>(`${url}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },
};
