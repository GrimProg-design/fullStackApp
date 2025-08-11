import '../styles/body-main.css'
import { useState, useEffect } from "react";

export default function MorePage() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/more")
      .then((res) => res.text())
      .then((res) => setData(res));
  }, []);

  return (
    <div className='wrapper-main'>
      <h1>{data || "Loading..."}</h1>
    </div>
  );
}
