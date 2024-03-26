import { Board, useBoard } from "../config/api";
import BoardAdd from "../components/BoardAdd";
import { useRecoilState } from "recoil";
import { textState } from "../store/Text";

const Board = () => {
  const { data, isError, error, isLoading } = useBoard();
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
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
