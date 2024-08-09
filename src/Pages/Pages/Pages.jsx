import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, CardMedia, Typography, Tabs, Tab } from "@mui/material";

export const loader = async ({ params }) => {
  const res = await fetch(
    `http://localhost:8000/api/v1/vendors/name/${params.pageName}`
  );
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  return res.json();
}

export const Pages = () => {
  const page = useLoaderData();

  return (
    <>
      <Card>
        <CardMedia image={page.backgroundImage}>
          <Avatar alt={page.name} src={page.profileImage} />
        </CardMedia>
        <Typography gutterBottom variant="h4" component="div">{page.name}</Typography>
        <Typography gutterBottom variant="h6" component="div">{page.summary}</Typography>
        <Button variant="contained">Make an appointment</Button>
      </Card>
      <Card>
        <Tabs>
          <Tab label="Description">
          </Tab>
          <Tab label="Services">
          </Tab>
        </Tabs>
        <Typography gutterBottom variant="body1" component="div">{page.description}</Typography>
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
