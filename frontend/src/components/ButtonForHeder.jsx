import { Children } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Buttons({value, direction, id, activeId, onClick }) {
  const isActive = id === activeId;

  return (
    <div className="buttons-div">
      <Link
        onClick={() => onClick(id)}
        to={direction}
        className="links-button"
        style={
          isActive
            ? {
                boxShadow:
                  "inset 3px 3px 7px #9798a0, inset -3px -3px 9px #fff",
              }
            : { boxShadow: "5px 5px 10px #9798a0, -5px -5px 12px #ffffff" }
        }
      >
        {value}
      </Link>
    </div>
  );
}
