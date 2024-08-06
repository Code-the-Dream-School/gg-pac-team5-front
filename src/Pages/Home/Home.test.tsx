import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { Home, loader } from "./Home";
import { Greeter_Customer } from "./Greeter_Customer/Greeter_Customer";
import { Carousel } from "./Carousel/Carousel";
import { vi } from "vitest";

vi.mock("./Greeter_Customer/Greeter_Customer", () => ({
	Greeter_Customer: vi.fn(() => <div>Mocked Greeter_Customer</div>),
}));

vi.mock("./Carousel/Carousel", () => ({
	Carousel: vi.fn(({ list }) => (
		<div>Mocked Carousel with list: {list.join(", ")}</div>
	)),
}));

describe("Home Component", () => {
	it("renders the Home component with mocked components", () => {
		const mockData = [1, 2, 3, 4, 5, 6, 7];

		const FAKE_EVENT = { name: "test event" };
		const routes = [
			{
				path: "/",
				element: <Home />,
				loader: () => FAKE_EVENT,
			},
		];

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

		expect(screen.getByText("Mocked Greeter_Customer")).toBeInTheDocument();
		expect(
			screen.getByText("Mocked Carousel with list: 1, 2, 3, 4, 5, 6, 7")
		).toBeInTheDocument();
		expect(screen.getByText("Divider")).toBeInTheDocument();
		expect(screen.getByText("Greeter_Provider")).toBeInTheDocument();
		expect(screen.getByText("Feedback")).toBeInTheDocument();
	});
});
