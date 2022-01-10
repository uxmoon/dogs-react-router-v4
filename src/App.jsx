import { Switch, Route } from "react-router-dom";
import { DogsList } from "./components/DogsList";
import { DogDetails } from "./components/DogDetails";
import { NavBar } from "./components/NavBar";
import dogs from "./dogs.json";

import "./App.css";

function App() {
  const getDog = (props) => {
    // use RouterProps to get name
    let name = props.match.params.name;

    // use find() on dogs json to find a name match
    let current = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails {...props} dog={current} />;
  };
  return (
    <>
      <NavBar dogs={dogs} />
      <Switch>
        <Route exact path="/dogs" render={() => <DogsList dogs={dogs} />} />
        <Route exact path="/dogs/:name" render={getDog} />
      </Switch>
    </>
  );
}

export default App;
