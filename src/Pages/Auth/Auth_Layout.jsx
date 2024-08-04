import { Link, useNavigate } from "react-router-dom";

const Auth_Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Link to="..">&#8592; Go back</Link>
      <button onClick={() => navigate("login")}>Login</button>
      <button onClick={() => navigate("register")}>Register</button>
    </>
  );
};

export { Auth_Layout };
