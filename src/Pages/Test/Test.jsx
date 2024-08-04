import { useEffect, useState } from "react";

export default function Pages() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/resources")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <p>{data}</p>
    </>
  );
}
