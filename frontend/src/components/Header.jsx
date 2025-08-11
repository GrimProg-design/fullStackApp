import "../styles/header.css";
import Buttons from "./buttonForHeder";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState("btn1");

  return (
    <div className="main-header">
      <h1>Header</h1>
      <nav className="nav-container">
        <Buttons
          id="btn1"
          value="Home"
          activeId={isActive}
          direction="/home"
          onClick={setIsActive}
        />
        <Buttons
          id="btn2"
          value="More"
          activeId={isActive}
          direction="/more"
          onClick={setIsActive}
        />
        <Buttons
          id="btn3"
          value="Tasks"
          activeId={isActive}
          direction="/products"
          onClick={setIsActive}
        />
      </nav>
    </div>
  );
}
