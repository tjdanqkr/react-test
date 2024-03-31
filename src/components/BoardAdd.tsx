import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBoard } from "../config/board";

import Textarea from "../atom/Textarea";
import FormComponent from "../atom/FormComponent";
import Label from "../atom/Label";
import Input from "../atom/Input";
import Button from "../atom/Button";
import Article from "../atom/Article";

const BoardAdd = () => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const content = (document.getElementById("content") as HTMLTextAreaElement).value;
    const form = { title, content };
    boardMutation.mutate(form);
  };
  const queryClient = useQueryClient();
  const boardMutation = useMutation({
    mutationFn: postBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board/all"] });
      (document.getElementById("title") as HTMLInputElement).value = "";
      (document.getElementById("content") as HTMLTextAreaElement).value = "";
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return (
    <Article>
      <FormComponent onSubmitHandler={onSubmitHandler}>
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" placeholder="Add a new board" required />
        <Label htmlFor="content">Content</Label>
        <Textarea id="content" placeholder="Add a new board" required />
        <Button>Add</Button>
      </FormComponent>
    </Article>
  );
};
export default BoardAdd;
