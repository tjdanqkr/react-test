import { useRecoilValue } from "recoil";
import { meState } from "../store";
import H1 from "../atom/H1";
import Article from "../atom/Article";

const Home = () => {
  const id = useRecoilValue(meState);
  return (
    <Article>
      <H1>{id}</H1>
      <H1>Home</H1>
      <p>This is the home page.</p>
    </Article>
  );
};
export default Home;
