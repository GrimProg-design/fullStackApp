import { useEffect, useState } from "react";
import "../styles/body-main.css"

export default function HomePage() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/home")
      .then((res) => res.text())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="wrapper-main">
      <h1>{data || "Loading..."}</h1>
    </div>
  );
}
