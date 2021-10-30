import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      <ul>
        <li className="navBar__link">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
