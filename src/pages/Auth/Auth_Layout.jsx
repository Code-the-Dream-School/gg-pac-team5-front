import { Link } from "react-router-dom";

const Auth_Layout = () => {
	return (
		<>
			<Link to="..">&#8592; Go back</Link>
			<button>Login</button>
			<button>Register</button>
		</>
	);
};

export { Auth_Layout };
