import { Link } from "react-router-dom";
import "../assets/css/header.css";
function Header() {
  return (
    <header>
      <h1>
        <Link to="/">SHOP</Link>
      </h1>
    </header>
  );
}

export default Header;
