import { useEffect } from "react";
import Button from "../atom/Button";
import FormComponent from "../atom/FormComponent";
import Input from "../atom/Input";
import Label from "../atom/Label";
import Textarea from "../atom/Textarea";
import { Board, putBoard } from "../config/board";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

type props = {
  board: Board;
};
const BoardUpdate = ({ board }: props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const boardMutation = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: (body: any) => putBoard(body.id, body.form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board/all"] });
      (document.getElementById("title") as HTMLInputElement).value = "";
      (document.getElementById("content") as HTMLTextAreaElement).value = "";
      navigate(`/boards`);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const content = (document.getElementById("content") as HTMLTextAreaElement).value;
    const form = { title, content };
    boardMutation.mutate({ form, id: board.id });
  };
  useEffect(() => {
    (document.getElementById("title") as HTMLInputElement).value = board.title;
    (document.getElementById("content") as HTMLTextAreaElement).value = board.content;
  }, [board]);
  return (
    <FormComponent onSubmitHandler={onSubmitHandler}>
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" placeholder="Add a new board" required />
      <Label htmlFor="content">Content</Label>
      <Textarea id="content" placeholder="Add a new board" required />
      <Button>수정</Button>
    </FormComponent>
  );
};
export default BoardUpdate;
