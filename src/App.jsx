import { Switch, Route } from "react-router-dom";
import { DogsList } from "./components/DogsList";
import dogs from "./dogs.json";

import "./App.css";

function App() {
  return <Route path="/dogs" render={() => <DogsList dogs={dogs} />} />;
}

export default App;
