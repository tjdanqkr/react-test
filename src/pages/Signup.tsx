import { useNavigate } from "react-router";
import { signup } from "../config/auth";
import FormComponent from "../atom/FormComponent";
import Label from "../atom/Label";
import Input from "../atom/Input";
import Hr from "../atom/Hr";
import Button from "../atom/Button";
import Article from "../atom/Article";

const Signup = () => {
  const navigate = useNavigate();
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const { status } = await signup(name, password);
    if (status === 201) navigate("/login");
  };
  return (
    <Article>
      <FormComponent onSubmitHandler={onSubmitHandler}>
        <Label htmlFor="name">Username</Label>
        <Input type="text" id="name" />
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" />
        <Hr />
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Signup
        </Button>
      </FormComponent>
    </Article>
  );
};
export default Signup;
