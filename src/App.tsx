import { useBoard } from "./config/api";
import MyRouter from "./router/MyRouter";

function App() {
  useBoard();
  return <MyRouter />;
}

export default App;
