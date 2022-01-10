import { Link } from "react-router-dom";

export const DogsList = ({ dogs }) => {
  return (
    <div className="container">
      <div className="row">
        {dogs.map((dog) => (
          <div className="col-12 col-sm-6 col-md-4" key={dog.name}>
            <img src={`src/images/${dog.src}.jpg`} alt={dog.name} />
            <h2 className="text-center">
              <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
