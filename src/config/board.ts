import { api } from "./api";
export type Board = {
  id: number;
  title: string;
  content: string;
  isMe: boolean;
};
export type BoardRequest = {
  title: string;
  content: string;
};
export const getBoard = async (): Promise<Board[]> => {
  const { data } = await api("/api/boards", "GET");
  return data;
};
export const getBoardById = async (id: number): Promise<Board> => {
  const { data } = await api(`/api/boards/${id}`, "GET");
  return data;
};
export const postBoard = async (board: BoardRequest) => {
  const data = await api("/api/boards", "POST", board);
  return data;
};
export const putBoard = async (id: number, board: BoardRequest) => {
  const data = await api(`/api/boards/${id}`, "PUT", board);
  return data;
};
export const deleteBoard = async (id: number) => {
  const data = await api(`/api/boards/${id}`, "DELETE");
  return data;
};
