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
// import { routes } from "../main";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);

	return {
		user: userEvent.setup(),
		...render(ui, { wrapper: BrowserRouter }),
	};
};

// const renderFullRouter = () => {
// 	const router = createMemoryRouter(routes);
// 	return {
// 		user: userEvent.setup(),
// 		...render(<RouterProvider router={router} />),
// 	};
// };

export { renderWithRouter };
// export { renderFullRouter };
