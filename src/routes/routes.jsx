import App from "../App.jsx";
import { Home, loader as homeLoader } from "../Pages/Home/Home";
import  Auth_Layout from "../Pages/Auth/Auth_Layout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import { Error } from "../Pages/Error/Error";
import { Pages, loader as pagesLoader } from "../Pages/Pages/Pages.jsx";
import Test from "../Pages/Test/Test.jsx";
import Cards from "../Pages/Services/Cards.jsx";
import Profile from "../Pages/Pages/Profile.jsx";
import { Booking } from "../Pages/Pages/Booking"

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				element: <Home />,
				index: true,
				loader: homeLoader,
			},
			{
				path: "auth",
				element: <Auth_Layout />,
				children: [
					{ index: true, element: <Login /> },
					{ path: "register", element: <Register /> },
				],
			},
			{
				path: "profile",
				element: <Auth_Layout />,
				children: [
					{ index: true, element: <Profile /> },
				],
			},
			{
				path: "pages/:pageName",
				element: <Pages />,
				loader: pagesLoader,
				children: [
					{
						path: "book",
						element: <Booking />
					}
				]
			},
			{
				path: "pages",
				element: <Cards />,
			},
			{
				path: "test",
				element: <Test />,
			},
		],
	},
];

export { routes };
