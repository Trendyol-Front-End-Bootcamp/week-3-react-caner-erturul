import React from "react";
import { useHistory } from "react-router-dom";
import "./CharacterDetail.css";

export default function CharacterDetail({ character, episodeList }) {
  let history = useHistory();
  return (
    <div className="container">
      <button className="back-button" onClick={() => history.goBack()}>
        BACK
      </button>
      <div className="character-detail">
        <img src={character.image} alt={character.name} />
        <div className="character-info">
          <div className="section">
            <h2>{character.name}</h2>
            <span className="status">
              <span
                className={`status-icon ${character.status}-background`}
              ></span>
              {character.status} - {character.species}
            </span>
          </div>
          <div className="section">
            <span className="text-gray"> Last known location</span>
            <span>{character.location.name}</span>
          </div>
          <div className="section">
            <span className="text-gray"> First seen in:</span>
            <span>{character.origin.name}</span>
          </div>
          <div className="section">
            <span className="text-gray">Last 5 episode list:</span>
            <ul className="episode-list">
              {episodeList.map((episodeInfo) => (
                <li key={episodeInfo.id}>
                  {episodeInfo.name} - {episodeInfo.air_date} -{" "}
                  {episodeInfo.episode}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
