import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getBoard } from "./board";
type Method = "GET" | "POST" | "PUT" | "DELETE";
type Url = string;
type Body = object;
export const api = async (url: Url, method: Method, body?: Body) => {
  axios.defaults.baseURL = "http://localhost:4000";
  const id = localStorage.getItem("id");
  const data = await axios({
    method: method,
    url: url,
    data: body,
    headers: {
      Authorization: id,
    },
  });
  return data;
};

export const useBoard = () => {
  return useQuery({
    queryKey: ["board/all"],
    queryFn: getBoard,
    initialData: [],
  });
};
