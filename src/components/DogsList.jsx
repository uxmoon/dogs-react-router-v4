import { Link } from "react-router-dom";
import "./DogsList.css";

export const DogsList = ({ dogs }) => {
  return (
    <ul className="DogsList">
      {dogs.map((dog) => (
        <li key={dog.name}>
          <img src={`src/images/${dog.src}.jpg`} alt={dog.name} />
          <h2>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </h2>
        </li>
      ))}
    </ul>
  );
};
