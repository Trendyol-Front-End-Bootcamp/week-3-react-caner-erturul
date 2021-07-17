import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import CharacterList from "../components/CharacterList/CharacterList";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import axios from "axios";

export default function Home() {
  const [searchBy, setSearchBy] = useState({ gender: "", status: "" });
  const [characterList, setCharacterList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState([]);

  //Search Parameter Set Function
  const handleChange = (event) => {
    setSearchBy({ ...searchBy, [event.target.name]: event.target.value });
    setPage(1);
    setCharacterList([]);
  };
  const handleClick = (event) => {
    if (info.next) setPage(page + 1);
  };

  //getData
  useEffect(() => {
    const getCharacter = async () => {
      const response = await axios
        .get(`https://rickandmortyapi.com/api/character`, {
          params: {
            page: page,
            status: searchBy.status,
            gender: searchBy.gender,
          },
        })
        .catch((error) => {
          setError(error);
        });
      setIsLoaded(true);
      setCharacterList([...characterList, ...response.data.results]);
      setInfo(response.data.info);
    };
    getCharacter();
  }, [page, searchBy]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <SearchBar onChange={handleChange} />
        {!isLoaded ? (
          <LoadingSpinner />
        ) : (
          <>
            <CharacterList
              characterList={characterList}
              onClick={handleClick}
            />
          </>
        )}
      </div>
    );
  }
}
