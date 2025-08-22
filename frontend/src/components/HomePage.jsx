import { useEffect, useState } from "react";
import "../styles/body-main.css";

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

      <div className="home-text">
        <p>
          <span style={{ marginLeft: "2em" }}>
            Данный веб-сайт предоставляет возможность вам писать свои мысли,
            делать заметки, да и просто добавлять какие-то напоминания о
            чем-нибудь. Попробуйте в разделе <b>Tasks!</b>
          </span>
        </p>
      </div>
    </div>
  );
}
