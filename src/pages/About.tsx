import { useQueryClient } from "@tanstack/react-query";

const About = () => {
  const queryClient = useQueryClient();
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>{queryClient.getQueryData(["board/all"]).length}</p>
    </div>
  );
};
export default About;
