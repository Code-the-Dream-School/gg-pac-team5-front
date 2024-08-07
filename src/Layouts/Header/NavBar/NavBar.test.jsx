import { screen, waitFor, render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./NavBar";
import { renderWithRouter } from "../../../util/testingUtils";
import { routes } from "../../../routes/routes";
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));
test("NavBar rendering and navigating", async () => {
	const { user } = renderWithRouter(<NavBar />);
	// verify page content for default route
	expect(screen.getByText(/home/i)).toBeInTheDocument();
	expect(screen.getByText(/home/i).getAttribute("class")).toMatch(/active/gi);
	expect(screen.getByText(/find service/i)).toBeInTheDocument();
	expect(screen.getByText(/login/i)).toBeInTheDocument();
	/*
		gi:
			g: global in all classes
			i: case insensitive
	*/
	// Click on "Home" link
	await user.click(screen.getByText(/home/i));
	expect(window.location.pathname).toBe("/");
	// Click on "Login" link
	await user.click(screen.getByText(/login/i));
	expect(window.location.pathname).toBe("/auth");
	// Click on "Find Service" link
	await user.click(screen.getByText(/find service/i));
	expect(screen.getByText(/find service/i).getAttribute("class")).toMatch(
		/active/gi
	);
	expect(window.location.pathname).toBe("/pages");
});

test("navigates to the correct routes and loads the correct page", async () => {
	// const { user } = renderFullRouter();
	const router = createMemoryRouter(routes, {
		initialEntries: ["/"],
		initialIndex: 0,
	});

	render(<RouterProvider router={router} />);

	await waitFor(() => screen.debug());
	// // Initial render - should show Home Page
	// expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

	// // Click on "Find Service" link and check the page content
	// await user.click(screen.getByText(/Find Service/i));
	// expect(screen.getByText(/Cards/i)).toBeInTheDocument();

	// // Click on "Login" link and check the page content
	// await user.click(screen.getByText(/Login/i));
	// expect(screen.getByText(/Login Page/i)).toBeInTheDocument();

	// // Click on "Home" link and check the page content
	// await user.click(screen.getByText(/Home/i));
	// expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});
