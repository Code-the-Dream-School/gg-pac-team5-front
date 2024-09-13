import { useLoaderData, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, CardMedia, Typography, Tabs, Tab, Box, Container } from "@mui/material";
import { API } from "../../config"
import styles from "./Shared.module.css"

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
        className={styles.revertCss}
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          minHeight: '100vh',
          flexFlow: "column",
          "padding-top": "10vh",
          justifyContent: "space-between",
        }}>
        <Outlet context={vendorId}></Outlet>
        <Box sx={{ display: 'flex', gap: '2em', flexWrap: 'wrap', padding: '2em', alignItems: 'center', height: '100%' }}>
          <Card sx={{ padding: '2em' }}>
            <CardMedia image={vendor.profile.backgroundImage} sx={{
              display: 'flex',
              alignItems: 'flex-end', // Vertically align the Avatar to the bottom
              height: '300px', // Adjust height as needed
            }}>
              <Avatar alt={vendor.name} src={vendor.profile.profileImage} sx={{ height: "256px", width: "256px", margin: '20px', border: '1px solid black', }} />
            </CardMedia>
            <Typography gutterBottom variant="h4" component="div">{vendor.name}</Typography>
            <Typography gutterBottom variant="h6" component="div">{vendor.profile.summary}</Typography>
            <Link to="book">
              <Button variant="contained">Make an appointment</Button>
            </Link>
          </Card >
          <Card sx={{ padding: '2em' }}>
            <Tabs value={0}>
              <Tab label="Description">
              </Tab>
              <Tab label="Services">
              </Tab>
            </Tabs>
            <Typography gutterBottom variant="body1" component="div" sx={{ margin: '20px' }}>{vendor.profile.description}</Typography>
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
