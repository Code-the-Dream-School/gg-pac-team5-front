import { useLoaderData, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, CardMedia, Typography, Tabs, Tab, Box, Container } from "@mui/material";
import { API } from "../../config"

export const loader = async ({ params }) => {
  const res = await fetch(
    `${API}/vendors/name/${params.pageName}`
  );
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  return (await res.json()).vendor;
}

export const Pages = () => {
  const vendor = useLoaderData();
  const vendorId = vendor._id;
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          minHeight: '100vh',
          flexFlow: "column",
          height: "100vh",
          width: "100vw",
          "padding-top": "10vh",
          justifyContent: "space-between",
        }}>
        <Outlet context={vendorId}></Outlet>
        <Box sx={{ display: 'flex', gap: '2em', flexWrap: 'wrap', padding: '2em', alignItems: 'center' }}>
          <Card>
            {/* <CardMedia image={vendor.profile.backgroundImage}>
              <Avatar alt={vendor.name} src={vendor.profile.profileImage} />
            </CardMedia> */}
            <Typography gutterBottom variant="h4" component="div">{vendor.name}</Typography>
            {/* <Typography gutterBottom variant="h6" component="div">{vendor.profile.summary}</Typography> */}
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
            {/* <Typography gutterBottom variant="body1" component="div">{vendor.profile.description}</Typography> */}
          </Card>
          <br />
          <Link to="/pages">
            <button type="submit" className="button wide tall luxury">
              Return to Service Page
            </button>
          </Link>
        </Box>
      </Container >
    </>
  );
};
