import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({ dogs }) => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        Dogs
      </NavLink>
      <div>
        {dogs.map((dog) => (
          <NavLink exact key={dog.name} to={`/dogs/${dog.name}`}>
            {dog.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
