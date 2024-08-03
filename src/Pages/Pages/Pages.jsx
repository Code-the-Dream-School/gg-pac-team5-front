import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

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
