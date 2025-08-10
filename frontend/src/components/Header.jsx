import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      <nav className="nav-container">
        <div className="buttons-div">
          <Link to="/home" className="links-button">
            Go to home
          </Link>
        </div>
        <div className="buttons-div">
          <Link to="/more" className="links-button">
            Go to more
          </Link>
        </div>
        <div>
          <Link to="/products" className="links-button">
            Products
          </Link>
        </div>
      </nav>
      <hr></hr>
    </div>
  );
}
