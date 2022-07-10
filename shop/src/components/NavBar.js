import "../assets/css/navbar.css";

function NavBar() {
  return (
    <nav>
      <ul className="left-nav">
        <li>
          <a href="#All">ALL</a>
        </li>
        <li>
          <a href="#Women">WOMEN</a>
        </li>
        <li>
          <a href="#Men">MEN</a>
        </li>
      </ul>
      <ul className="right-nav">
        <li>
          <a href="#Event">Event</a>
        </li>
        <li>
          <a href="#Brand">Brand</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
