import hazel from "../images/hazel.jpg";
import tubby from "../images/tubby.jpg";
import whiskey from "../images/whiskey.jpg";

export const DogDetails = ({ dog }) => {
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={`src/images/${dog.src}.jpg`} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
