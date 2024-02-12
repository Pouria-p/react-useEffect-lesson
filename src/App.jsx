import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import CharactersList from "./pages/CharactersList";
import DetailsPage from "./pages/DetailsPage";
function App() {
  const baseUrl = "https://ih-crud-api.herokuapp.com";
  const [listOfCharacters, setListOfCharacters] = useState(null);
  useEffect(() => {
    axios
      .get(`${baseUrl}/characters`)
      .then((res) => {
        setListOfCharacters(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<CharactersList list={listOfCharacters} />} />
        <Route path="/details/:movieId" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
