import { useRecoilValue } from "recoil";
import { textState } from "../store/Text";

const Home = () => {
  const text = useRecoilValue(textState);
  return (
    <div>
      <h1>{text}</h1>
      <h1>Home</h1>
      <p>This is the home page.</p>
    </div>
  );
};
export default Home;
