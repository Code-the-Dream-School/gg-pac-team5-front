import { useLoaderData, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, CardMedia, Typography, Tabs, Tab } from "@mui/material";
import { API } from "../../config"

export const loader = async ({ params }) => {
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
  const vendor = useLoaderData();
  const vendorId = vendor.id;
  return (
    <>
      <Outlet context={vendorId}></Outlet>
      <Card>
        <CardMedia image={vendor.profile.backgroundImage}>
          <Avatar alt={vendor.name} src={vendor.profile.profileImage} />
        </CardMedia>
        <Typography gutterBottom variant="h4" component="div">{vendor.name}</Typography>
        <Typography gutterBottom variant="h6" component="div">{vendor.profile.summary}</Typography>
        <Link to="book">
          <Button variant="contained">Make an appointment</Button>
        </Link>
      </Card >
      <Card>
        <Tabs value={0}>
          <Tab label="Description">
          </Tab>
          <Tab label="Services">
          </Tab>
        </Tabs>
        <Typography gutterBottom variant="body1" component="div">{vendor.profile.description}</Typography>
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
