/* Reference:
    https://testing-library.com/docs/example-react-router/
*/

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);

	return {
		user: userEvent.setup(),
		...render(ui, { wrapper: BrowserRouter }),
	};
};

export { renderWithRouter };
