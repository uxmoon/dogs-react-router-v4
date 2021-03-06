import { Switch, Route, Redirect } from "react-router-dom";
import { DogsList } from "./DogsList";
import { DogDetails } from "./DogDetails";

export const Routes = ({ dogs }) => {
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
    <Switch>
      <Route exact path="/dogs" render={() => <DogsList dogs={dogs} />} />
      <Route exact path="/dogs/:name" render={getDog} />
      <Redirect to="/dogs" />
    </Switch>
  );
};
