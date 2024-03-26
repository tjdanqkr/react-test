import { useQuery } from "@tanstack/react-query";
import { Board, getBoard } from "../config/api";
import BoardAdd from "../components/BoardAdd";

const Board = () => {
  const { data, isError, error, isLoading } = useQuery({ queryKey: ["board/all"], queryFn: getBoard });
  console.log(data);
  return (
    <div>
      <h1>Board</h1>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {data &&
          data.map((item: Board) => (
            <ul key={item.id}>
              <ul>{item.id}</ul>
              <ul>{item.title}</ul>
            </ul>
          ))}
      </div>
      <BoardAdd />
    </div>
  );
};
export default Board;
