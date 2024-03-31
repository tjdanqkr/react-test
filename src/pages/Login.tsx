import { useSetRecoilState } from "recoil";
import { login } from "../config/auth";
import { meState } from "../store";
import { useNavigate } from "react-router";
import Input from "../atom/Input";
import Label from "../atom/Label";
import FormComponent from "../atom/FormComponent";
import Hr from "../atom/Hr";
import Button from "../atom/Button";
import Article from "../atom/Article";

const Login = () => {
  const setMe = useSetRecoilState(meState);
  const navigate = useNavigate();
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const { data } = await login(name, password);
    const { id } = data;

    if (id) {
      localStorage.setItem("id", id);
      setMe(id);
      navigate("/boards");
    }
  };
  return (
    <Article>
      <FormComponent onSubmitHandler={onSubmitHandler}>
        <Label htmlFor="name">Username</Label>
        <Input type="text" id="name" required />
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" required />
        <Hr />
        <Button type="submit">Login</Button>
      </FormComponent>
    </Article>
  );
};
export default Login;
