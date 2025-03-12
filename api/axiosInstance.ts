import axios from "axios";

// Token
const apiToken = "9e6a7f84-052c-4f70-a82d-cb8c9146abf4";

console.log(process.env.BASE_URL);

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}`,
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "Content-Type": "application/json",
  },
});
