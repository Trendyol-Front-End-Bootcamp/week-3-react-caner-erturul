import React from "react";
import "./SearchBar.css";

export default function SearchBar({ onChange }) {
  return (
    <div className="search-area">
      <h2>Search</h2>
      <div className="form">
        <select name="status" onChange={onChange}>
          <option value="">Search by status</option>
          <option value="dead">Dead</option>
          <option value="alive">Alive</option>
          <option value="unknown">Unknown</option>
        </select>
        <select name="gender" onChange={onChange}>
          <option value="">Search by gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  );
}
