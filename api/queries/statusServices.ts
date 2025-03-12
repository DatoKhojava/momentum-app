import { axiosInstance } from "../axiosInstance";
import { StatusResponse } from "../types";

const url = "/statuses";

export const statusServices = {
  getStatuses: async () => {
    try {
      const res = await axiosInstance.get<StatusResponse[]>(`${url}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },
};
