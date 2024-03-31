import BoardAdd from "../components/BoardAdd";
// import { useRecoilState } from "recoil";
// import { boardState } from "../store";
import BoardList from "../components/BoardList";
// import Input from "../atom/Input";
// import Textarea from "../atom/Textarea";

const Boards = () => {
  // const [board, setBoard] = useRecoilState(boardState);
  // const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setBoard({ ...board, title: e.target.value });
  // };
  // const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setBoard({ ...board, content: e.target.value });
  // };

  return (
    <div>
      {/* <h1>{`${board.title} ${board.content}`}</h1>
      <Input type="text" value={board.title} onChange={onChangeTitle} />
      <Textarea value={board.content} onChange={onChangeContent} /> */}
      <BoardList />
      <BoardAdd />
    </div>
  );
};
export default Boards;
