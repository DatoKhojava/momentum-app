import { axiosInstance } from "../axiosInstance";
import { CommentRequest, CommentResponse } from "../types";

export const commentService = {
  getComments: async (taskId: number) => {
    try {
      const res = await axiosInstance.get<CommentResponse[]>(
        `/tasks/${taskId}/comments`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  },

  postComment: async (taskId: number, data: CommentRequest) => {
    try {
      await axiosInstance.post(`/tasks/${taskId}/comments`, data);
    } catch (error) {
      return error;
    }
  },
};
