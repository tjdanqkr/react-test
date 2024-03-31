import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Board, deleteBoard, getBoardById } from "../config/board";
import H1 from "../atom/H1";
import Article from "../atom/Article";
import DangerButton from "../atom/DangerButton";
import WarningButton from "../atom/WarningButton";
import { useRecoilState } from "recoil";
import { IBoard, boardState } from "../store";
import BoardDetail from "../components/BoardDetail";
import { Link } from "react-router-dom";
import BoardUpdate from "../components/BoardUpdate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Board = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useRecoilState<Board>(boardState);
  const [update, setUpdate] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const boardMutation = useMutation({
    mutationFn: deleteBoard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board/all"] });
      navigate("/boards");
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const getById = async (id: number) => {
    try {
      const data = await getBoardById(id);
      setBoard(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setBoard({ ...IBoard });
    setLoading(true);
    setUpdate(false);
  }, [setBoard]);

  useEffect(() => {
    if (id) getById(Number(id));
  }, [id]);
  if (loading)
    return (
      <Article>
        <H1>Loading...</H1>
      </Article>
    );
  if (error)
    return (
      <Article>
        <H1>Error: {error}</H1>
        <Link to="/boards">Back</Link>
      </Article>
    );
  if (board)
    return (
      <Article>
        {update ? <BoardUpdate board={board} /> : <BoardDetail board={board} />}
        {board.isMe && <WarningButton onClick={() => setUpdate(!update)}>{update ? "돌아가기" : "수정"}</WarningButton>}
        {board.isMe && <DangerButton onClick={() => boardMutation.mutate(Number(id))}>삭제</DangerButton>}
      </Article>
    );
};
export default Board;
