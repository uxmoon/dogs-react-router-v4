import { Link } from "react-router-dom";
import "./DogsList.css";

export const DogsList = ({ dogs }) => {
  return (
    <div className="container pt-4">
      <div className="row">
        {dogs.map((dog) => (
          <div
            className="DogsList-dog col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0"
            key={dog.name}
          >
            <div className="DogsList-thumbnail">
              <img src={dog.src} alt={dog.name} />
            </div>
            <h2 className="DogsList-name text-center mb-4">{dog.name}</h2>
            <Link to={`/dogs/${dog.name}`} className="btn btn-primary">
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
