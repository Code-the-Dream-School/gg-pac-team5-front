/* Reference:
    https://testing-library.com/docs/example-react-router/
*/

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
	BrowserRouter,
	RouterProvider,
	createMemoryRouter,
} from "react-router-dom";
import { routes } from "../routes/routes";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);

	return {
		user: userEvent.setup(),
		...render(ui, { wrapper: BrowserRouter }),
	};
};

const renderMemoryRouter = (
	params = { initialEntries: ["/"], initialIndex: 0 },
	r = routes
) => {
	const router = createMemoryRouter(r, params);

	return {
		user: userEvent.setup(),
		...render(<RouterProvider router={router} />),
	};
};

export { renderWithRouter };
export { renderMemoryRouter };
