import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import CharacterList from "../components/CharacterList/CharacterList";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function Home() {
  const [searchBy, setSearchBy] = useState({ gender: "", status: "" });
  const [characterList, setCharacterList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState([]);

  const handleChange = (event) => {
    setSearchBy({ ...searchBy, [event.target.name]: event.target.value });
    setPage(1);
    setCharacterList([]);
  };
  const handleClick = (event) => {
    if (info.next) setPage(page + 1);
  };

  //fetchData
  useEffect(() => {
    const queryString = `?page=${page}${
      searchBy.status ? "&status=" + searchBy.status : ""
    }${searchBy.gender ? "&gender=" + searchBy.gender : ""}`;
    fetch(`https://rickandmortyapi.com/api/character${queryString}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCharacterList([...characterList, ...data.results]);
          setInfo(data.info);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [searchBy, page]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <Header />
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
