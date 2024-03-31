import { atom } from "recoil";
export const IBoard = { id: 0, title: "", content: "", isMe: false };
export const boardState = atom({
  key: "boardState",
  default: { ...IBoard },
});

export const meState = atom({
  key: "meState",
  default: localStorage.getItem("id") || "",
});
