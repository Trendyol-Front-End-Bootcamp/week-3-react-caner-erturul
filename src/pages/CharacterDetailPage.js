import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CharacterDetail from "../components/CharacterDetail/CharacterDetail";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function CharacterDetailPage() {
  const [character, setCharacter] = useState({
    name: "",
    image: "",
    status: "",
    species: "",
    origin: { name: "" },
    location: { name: "" },
    episode: [],
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [episodeList, setEpisodeList] = useState([]);
  let { id } = useParams();

  // Get Character Detail
  useEffect(() => {
    const getCharacterDetails = async () => {
      await axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
          setCharacter(response.data);
          let episodeNumbers = response.data.episode
            .slice(-5)
            .map((episode) => episode.split("episode/"));
          let numberList = episodeNumbers.map((episode) => episode[1]);
          return axios.get(
            `https://rickandmortyapi.com/api/episode/${numberList.join(",")}`
          );
        })
        .then((response) => {
          setEpisodeList(
            Array.isArray(response.data) ? response.data : Array(response.data)
          );
          setIsLoaded(true);
        })
        .catch((error) => {
          setError(error);
        });
    };
    getCharacterDetails();
  }, [id]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        {!isLoaded ? (
          <LoadingSpinner />
        ) : (
          <CharacterDetail character={character} episodeList={episodeList} />
        )}
      </div>
    );
  }
}
