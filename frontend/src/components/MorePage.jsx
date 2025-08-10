import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MorePage() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/more")
      .then((res) => res.text())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>{data || "Loading..."}</h1>
    </>
  );
}
