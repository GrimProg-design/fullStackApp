import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/home")
      .then((res) => res.text())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <Link to="/home">
        <h1>{data || "Loading..."}</h1>
      </Link>
    </>
  );
}
