import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const DetailsPage = () => {
  let { movieId } = useParams();
  let urlLink = `https://ih-crud-api.herokuapp.com/characters/${movieId}`;
  const [character, setCharacter] = useState();
  useEffect(() => {
    axios
      .get(urlLink)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [urlLink]);

  return (
    <>
      {character ? (
        <>
          <p>{character.name}</p>
          <p>{character.weapon}</p>
          <p>{character.occupation}</p>
        </>
      ) : (
        <p>Data not found</p>
      )}
    </>
  );
};

export default DetailsPage;
