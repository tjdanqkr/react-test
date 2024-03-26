import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBoard } from "../config/api";
import { useState } from "react";
const IForm = {
  title: "",
};
const BoardAdd = () => {
  const [form, setForm] = useState({ ...IForm });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    boardMutation.mutate(form);
    setForm({ ...IForm });
  };
  const queryClient = useQueryClient();
  const boardMutation = useMutation({
    mutationFn: postBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board/all"] });
    },
  });
  return (
    <form className="flex" onSubmit={onSubmitHandler}>
      <input type="text" value={form.title} onChange={onChangeHandler} name="title" placeholder="Add a new board" required />
      <button>Add</button>
    </form>
  );
};
export default BoardAdd;
