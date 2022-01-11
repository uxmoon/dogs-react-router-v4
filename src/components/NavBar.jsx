import { NavLink } from "react-router-dom";

export const NavBar = ({ dogs }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <NavLink exact to="/dogs" className="navbar-brand">
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
