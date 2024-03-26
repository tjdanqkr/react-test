import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <header>
      <div className="flex justify-between py-8 px-4">
        <h1>My Blog</h1>
        <nav className="flex justify-evenly gap-4">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
          <Link to="/board">Board</Link>
        </nav>
      </div>
      <hr />
    </header>
  );
};
export default HeaderNav;
