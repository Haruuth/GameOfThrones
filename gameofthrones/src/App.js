import "./App.scss";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Characters } from "./Pages/Characters";
import { Cronology } from "./Pages/Cronology";
import { House } from "./Pages/House";
import { HomePage } from "./Pages/HomePage";
import { useEffect, useState } from "react";
import { CharacterDetails } from "./Components/CharacterDetails";
import { HousesDetails } from "./Components/HousesDetails";


function App() {


  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);


  const getCharacters = () => {
    axios
      .get("http://localhost:3000/characters")
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getHouses = () => {
    axios
      .get("http://localhost:3000/houses")
      .then((res) => {
        setHouses(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  useEffect(() => {
    getCharacters();
    getHouses();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<Characters characters={characters} />}/>
          <Route path="/chronology" element={<Cronology characters={characters} />} />
          <Route path="/houses" element={<House houses={houses} />} />
          <Route path="/characterdetails/:id" element={<CharacterDetails />} />
          <Route path="/housesdetails/:id" element={<HousesDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
