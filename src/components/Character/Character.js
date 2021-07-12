import "./Character.css";

function Character({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <div className="character-info">
        <div className="section">
          <h2>{item.name}</h2>
          <span className="status">
            <span className={`status-icon ${item.status}-background`}></span>
            {item.status} - {item.species}
          </span>
        </div>
        <div className="section">
          <span className="text-gray"> Last known location</span>
          <span>{item.location.name}</span>
        </div>
        <div className="section">
          <span className="text-gray"> First seen in:</span>
          <span>{item.origin.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Character;
