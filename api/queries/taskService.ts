import { axiosInstance } from "../axiosInstance";
import { TaskRequest, TaskResponse } from "../types";

const url = "/tasks";

export const taskService = {
  getTasks: async () => {
    try {
      const res = await axiosInstance.get<TaskResponse[]>(`${url}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },

  postTasks: async (data: TaskRequest) => {
    try {
      await axiosInstance.post(`${url}`, data);
    } catch (error) {
      return error;
    }
  },

  getTaskById: async (id: number) => {
    try {
      const res = await axiosInstance.get<TaskResponse>(`${url}/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },
};
