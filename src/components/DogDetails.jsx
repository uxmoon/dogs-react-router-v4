import { Link } from "react-router-dom";
export const DogDetails = ({ dog }) => {
  return (
    <div>
      <Link to="/dogs">Go back</Link>
      <h1>{dog.name}</h1>
      <img src={`../src/images/${dog.src}.jpg`} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
