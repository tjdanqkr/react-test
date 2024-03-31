import H1 from "../atom/H1";
import Hr from "../atom/Hr";
import { Board } from "../config/board";
type props = {
  board: Board;
};
const BoardDetail = ({ board }: props) => {
  return (
    <>
      <H1>Board</H1>
      <Hr />
      <H1>{board.title}</H1>
      <p>{board.content}</p>
      <Hr />
    </>
  );
};
export default BoardDetail;
