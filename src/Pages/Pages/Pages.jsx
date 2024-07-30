import { useParams } from "react-router-dom";
import { NavBar } from "../../Layouts/Header/NavBar";

export default function Pages() {
  const { pageName } = useParams();
  return (
    <>
      <NavBar />
      <div>
        <h1>{pageName}</h1>
      </div>
    </>
  );
}
