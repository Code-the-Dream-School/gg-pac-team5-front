import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Pages(props) {
  const { vendorId } = { vendorId: "05929396-fea7-4596-9eb1-0faaa2352c59" };
  const { pageName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8000/api/v1/vendors/${vendorId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <></>;
  }
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
}
