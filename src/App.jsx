import { NavBar } from "./components/NavBar";
import { Routes } from "./components/Routes";
import { Helmet } from "react-helmet";
import { data } from "./dogs";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Dog App</title>
      </Helmet>
      <NavBar dogs={data} />
      <Routes dogs={data} />
    </>
  );
}

export default App;
