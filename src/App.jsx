import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return <Route path="/dogs" render={() => <h1>Dogs list</h1>} />;
}

export default App;
