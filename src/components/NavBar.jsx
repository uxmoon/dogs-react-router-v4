import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({ dogs }) => {
  return (
    <nav className="NavBar navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <NavLink exact to="/dogs" className="navbar-brand">
          <div className="me-2 d-inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="28"
              viewBox="0 0 26 28"
            >
              <path d="M12.187 7.375c0 1.75-.906 3.828-2.922 3.828-2.531 0-4.062-3.187-4.062-5.375C5.203 4.078 6.109 2 8.125 2c2.547 0 4.062 3.187 4.062 5.375zm-5.343 7.547c0 1.516-.797 3.094-2.516 3.094-2.5 0-4.328-3.063-4.328-5.328 0-1.516.812-3.109 2.516-3.109 2.5 0 4.328 3.078 4.328 5.344zM13 14.5c3.828 0 9 5.516 9 9.203C22 25.687 20.375 26 18.781 26 16.687 26 15 24.594 13 24.594c-2.094 0-3.875 1.391-6.141 1.391-1.516 0-2.859-.516-2.859-2.281 0-3.703 5.172-9.203 9-9.203zm3.734-3.297c-2.016 0-2.922-2.078-2.922-3.828C13.812 5.187 15.328 2 17.874 2c2.016 0 2.922 2.078 2.922 3.828 0 2.188-1.531 5.375-4.062 5.375zm6.75-1.625c1.703 0 2.516 1.594 2.516 3.109 0 2.266-1.828 5.328-4.328 5.328-1.719 0-2.516-1.578-2.516-3.094 0-2.266 1.828-5.344 4.328-5.344z" />
            </svg>
          </div>
          Dogs
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {dogs.map((dog) => (
              <li key={dog.name} className="nav-item">
                <NavLink exact to={`/dogs/${dog.name}`} className="nav-link">
                  {dog.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
