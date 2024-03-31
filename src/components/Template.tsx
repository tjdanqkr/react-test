import { Outlet } from "react-router";
import HeaderNav from "./HeaderNav";

const Template = () => {
  return (
    <div>
      <HeaderNav />
      <main className="container mx-auto py-8">
        <Outlet />
      </main>
    </div>
  );
};
export default Template;
