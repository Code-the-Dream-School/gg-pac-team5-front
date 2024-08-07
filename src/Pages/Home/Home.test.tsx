import { render, waitFor, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { Home, loader } from "./Home";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

test("renders Home element", async () => {
	const FAKE_EVENT = [1, 2, 3, 4];
	const routes = [
		{
			path: "/",
			element: <Home />,
			loader: () => FAKE_EVENT,
			// loader,
		},
	];

	// use <MemoryRouter> when you want to manually control the history

	const router = createMemoryRouter(routes, {
		/* The initial entries in the history stack. 
			This allows you to start a test (or an app) with 
			multiple locations already in the history stack 
			(for testing a back navigation, etc.)
			*/

		/* This is sample for current specific test for Home component
			it represents user going from home to pages and back home
			it does nothing, left for reference
			*/
		initialEntries: ["/", "/pages", "/"],

		/* The initial index in the history stack to render. 
			This allows you to start a test at a specific entry. 
			It defaults to the last entry in initialEntries. */
		initialIndex: 2,
	});

	render(<RouterProvider router={router} />);
	/* 
			TODO:
			define what to test
		*/
	await waitFor(() => screen.getByRole("main"));
	expect(screen.getByRole("main")).toBeDefined();
});
