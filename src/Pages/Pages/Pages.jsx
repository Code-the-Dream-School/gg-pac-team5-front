import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

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
  const data = useLoaderData();

  return (
    <>
      {/* <NavBar /> */}
      <div>
        <h1>{data.name}</h1>
      </div>
      <br />
      <Link to="/pages">
        <button type="submit" className="button wide tall luxury">
          Return to Service Page
        </button>
      </Link>
    </>
  );
};
