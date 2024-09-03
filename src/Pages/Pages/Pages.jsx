import { useLoaderData, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, CardMedia, Typography, Tabs, Tab } from "@mui/material";
import { API, MOCK_API } from "../../config"

export const loader = async ({ params }) => {
  if (import.meta.env.VITE_REACT_MSW) {
    const res = await fetch(
      `${MOCK_API}/vendors/name/${params.pageName}`
    );
    if (res.status === 404) {
      throw new Response("Not Found", { status: 404 });
    }
    return res.json();
  }

  // Hack to get vendor name from backend api
  const res = await fetch(
    `${API}/vendors`
  );
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  const data = await res.json();
  return data.vendors.find((vendor) => vendor.name === params.pageName);
}

export const Pages = () => {
  const page = useLoaderData();
  const vendorId = page.id;
  return (
    <>
      <Outlet context={vendorId}></Outlet>
      <Card>
        <CardMedia image={import.meta.env.VITE_REACT_MSW ? page.backgroundImage : "http://not-yet-implemented.invalid/backgroundImage.png"}>
          <Avatar alt={page.name} src={import.meta.env.VITE_REACT_MSW ? page.profileImage : "http://not-yet-implemented.invalid/profileImage.png"} />
        </CardMedia>
        <Typography gutterBottom variant="h4" component="div">{page.name}</Typography>
        <Typography gutterBottom variant="h6" component="div">{import.meta.env.VITE_REACT_MSW ? page.summary : "SUMMARY NOT YET IMPLEMENTED"}</Typography>
        <Link to="book">
          <Button variant="contained">Make an appointment</Button>
        </Link>
      </Card>
      <Card>
        <Tabs value={0}>
          <Tab label="Description">
          </Tab>
          <Tab label="Services">
          </Tab>
        </Tabs>
        <Typography gutterBottom variant="body1" component="div">{import.meta.env.VITE_REACT_MSW ? page.description : "DESCRIPTION NOT YET IMPLEMENTED"}</Typography>
      </Card>
      <br />
      <Link to="/pages">
        <button type="submit" className="button wide tall luxury">
          Return to Service Page
        </button>
      </Link>
    </>
  );
};
