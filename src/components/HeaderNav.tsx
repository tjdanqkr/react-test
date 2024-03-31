import { Link } from "react-router-dom";
import H1 from "../atom/H1";

const HeaderNav = () => {
  return (
    <header>
      <div className="flex justify-between py-8 px-4">
        <H1>My Blog</H1>
        <nav className="flex justify-evenly gap-4">
          <Link to="/">Home</Link>

          <Link to="/boards">Board</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      <hr />
    </header>
  );
};
export default HeaderNav;
