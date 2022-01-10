import { Link } from "react-router-dom";
import "./DogsList.css";

export const DogsList = ({ dogs }) => {
  return (
    <div className="DogsList container marketing">
      <div className="row">
        {dogs.map((dog) => (
          <div
            className="DogsList-dog col-12 col-sm-6 col-md-4 text-center"
            key={dog.name}
          >
            <img src={`src/images/${dog.src}.jpg`} alt={dog.name} />
            <h2 className="text-center mb-2">{dog.name}</h2>
            <Link to={`/dogs/${dog.name}`} className="btn btn-secondary">
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
