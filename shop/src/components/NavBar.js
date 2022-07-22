import { Link, useNavigate, Outlet } from "react-router-dom";

import "../assets/css/navbar.css";

function NavBar() {
  let navigate = useNavigate();

  return (
    <nav>
      <ul className="left-nav">
        <li>
          <Link to="All">ALL</Link>
        </li>
        <li>
          <Link to="women">WOMEN</Link>
        </li>
        <li>
          <Link to="men">MEN</Link>
        </li>
      </ul>
      <ul className="right-nav">
        <li>
          <Link
            onClick={() => {
              navigate("/event");
            }}
            // to="event"
          >
            Event
          </Link>
        </li>
        <li>
          <Link to="brand">Brand</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
