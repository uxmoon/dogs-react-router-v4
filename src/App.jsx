import { NavBar } from "./components/NavBar";
import { Routes } from "./components/Routes";
import { Helmet } from "react-helmet";
import dogs from "./dogs.json";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Dog App</title>
      </Helmet>
      <NavBar dogs={dogs} />
      <Routes dogs={dogs} />
    </>
  );
}

export default App;
