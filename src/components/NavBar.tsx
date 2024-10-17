import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book-lessons"
            className={({ isActive }) =>
              `book-lessons-nav ${isActive ? "active" : ""}`
            }
          >
            Book Lessons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mission-statement"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Mission Statement
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
