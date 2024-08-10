import { Auth_Layout } from "./Auth_Layout";
import Login from "./Login";
import Register from "./Register";
import { renderMemoryRouter } from "../../util/testingUtils";
import { waitFor, screen } from "@testing-library/react";

const routes = [
	{
		path: "/auth",
		element: <Auth_Layout />,
		children: [
			{ index: true, element: <Login /> },
			{ path: "register", element: <Register /> },
		],
	},
];

test("Renders login path as default for /auth path", async () => {
	const { user } = renderMemoryRouter(
		{ initialEntries: ["/auth"], initialIndex: 0 },
		routes
	);
	await waitFor(() => screen.getAllByText(/sign in/i));

	const inputFields = screen.getByRole("textbox");
	// expect(screen.getByRole("textbox")).toHaveLength(1);
	screen.debug(inputFields);
});
