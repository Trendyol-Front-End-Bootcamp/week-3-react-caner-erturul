import "./CharacterList.css";
import Character from "../Character/Character";

export default function CharacterList({ characterList, onClick }) {
  let page = <p> No Result Found! </p>;
  if (characterList) {
    page = (
      <ul className="character-list">
        {characterList.map((character) => (
          <li key={character.id}>
            <Character item={character} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="wrapper">
      {page}
      <button type="submit" className="load-more" onClick={onClick}>
        LOAD MORE
      </button>
    </div>
  );
}
