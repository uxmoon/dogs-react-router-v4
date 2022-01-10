import hazel from "../images/hazel.jpg";
import tubby from "../images/tubby.jpg";
import whiskey from "../images/whiskey.jpg";
import "./DogsList.css";

export const DogsList = ({ dogs }) => {
  return (
    <ul className="DogsList">
      {dogs.map((item) => (
        <li key={item.name}>
          <img src={`src/images/${item.src}.jpg`} alt={item.name} />
          <h2>{item.name}</h2>
        </li>
      ))}
    </ul>
  );
};
