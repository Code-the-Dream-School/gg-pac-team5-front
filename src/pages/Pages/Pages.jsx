import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pages() {
  const { pageName } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <>
        <div>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>{pageName}</h1>
      </div>
    </>
  );
}
