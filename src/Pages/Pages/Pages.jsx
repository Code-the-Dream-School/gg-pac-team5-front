import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Pages() {
  const { pageName } = useParams();
  return (
    <>
      {/* <NavBar /> */}
      <div>
        <h1>{pageName}</h1>
      </div>
      <br />
      <Link to="/pages">
        <button type="submit" className="button wide tall luxury">
          Return to Service Page
        </button>
      </Link>
    </>
  );
}
