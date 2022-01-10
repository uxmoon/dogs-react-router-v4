import { Link } from "react-router-dom";
export const DogDetails = ({ dog }) => {
  return (
    <>
      <Link to="/dogs" className="btn btn-secondary mb-4">
        Go back
      </Link>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`../src/images/${dog.src}.jpg`}
          alt={dog.name}
          className="card-img-top"
        />
        <div className="card-body">
          <h1 class="card-title h5">{dog.name}</h1>
          <h2 class="card-subtitle mb-2 text-muted h6">Age: {dog.age}</h2>
        </div>
        <ul className="list-group list-group-flush">
          {dog.facts.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
