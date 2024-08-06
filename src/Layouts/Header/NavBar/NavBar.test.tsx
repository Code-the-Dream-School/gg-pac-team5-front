import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { renderWithRouter } from "../../../util/testingUtils.jsx";

test("full navbar rendering/navigating", async () => {
	const { user } = renderWithRouter(<NavBar />);

	// verify page content for default route
	expect(screen.getByText(/home/i)).toBeInTheDocument();

	// verify page content for expected route after navigating

	const element = screen.getByText(/find service/i);
	await user.click(element);

	/*
		gi: 
			g: global in all classes 
			i: case insensitive
	*/

	expect(element.getAttribute("class")).toMatch(/active/gi);
});
