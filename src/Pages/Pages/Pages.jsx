import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Pages() {
  const { pageName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      let response;
      try {
        response = await fetch(
          `http://localhost:8000/api/v1/vendors/name/${pageName}`
        );
        const data = response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
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
