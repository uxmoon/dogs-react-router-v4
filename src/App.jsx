import { NavBar } from "./components/NavBar";
import { Routes } from "./components/Routes";
import dogs from "./dogs.json";
import "./App.css";

function App() {
  return (
    <>
      <NavBar dogs={dogs} />
      <Routes dogs={dogs} />
    </>
  );
}

export default App;
