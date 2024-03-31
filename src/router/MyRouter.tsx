import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Template from "../components/Template";
import Boards from "../pages/Boards";
import Login from "../pages/Login";
import Board from "../pages/Board";
import Signup from "../pages/Signup";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/boards" element={<Boards />} />
          <Route path="/boards/:id" element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
