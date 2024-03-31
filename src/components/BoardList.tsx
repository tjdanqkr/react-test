import { useBoard } from "../config/api";
import { Board } from "../config/board";
import H1 from "../atom/H1";
import BoardCard from "./BoardCard";
import Article from "../atom/Article";
import { useNavigate } from "react-router";

const BoardList = () => {
  const { data, isError, error, isLoading } = useBoard();
  const navigate = useNavigate();

  const redirect = (id: number) => {
    navigate(`/boards/${id}`);
  };
  return (
    <Article>
      <H1>Board</H1>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {data && data.map((item: Board) => <BoardCard key={item.id} item={item} redirect={redirect} />)}
      </div>
    </Article>
  );
};
export default BoardList;
