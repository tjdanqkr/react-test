import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type Method = "GET" | "POST" | "PUT" | "DELETE";
type Url = string;
type Body = object;
export const api = async (url: Url, method: Method, body?: Body) => {
  axios.defaults.baseURL = "http://localhost:3000";
  const data = await axios({
    method: method,
    url: url,
    data: body,
  });
  return data;
};

export const getBoard = async (): Promise<Board[]> => {
  const { data } = await api("/board", "GET");
  return data;
};
export const postBoard = async (board: BoardRequest) => {
  const data = await api("/board", "POST", board);
  return data;
};
export type Board = {
  id: number;
  title: string;
};
export type BoardRequest = {
  title: string;
};
export const useBoard = () => {
  return useQuery({
    queryKey: ["board/all"],
    queryFn: getBoard,
    initialData: [],
  });
};
