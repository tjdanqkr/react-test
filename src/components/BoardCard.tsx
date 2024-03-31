import { Board } from "../config/board";
type BoardCardProps = {
  item: Board;
  redirect: (id: number) => void;
};
const BoardCard = ({ item, redirect }: BoardCardProps) => {
  return (
    <div className="m-5 bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer" onClick={() => redirect(item.id)}>
      <ul key={item.id}>
        <li>{item.id}</li>
        <li className={item.isMe ? "font-bold" : ""}>{item.title}</li>
      </ul>
    </div>
  );
};
export default BoardCard;
