import React from "react";
import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <div>
      <Link to={`/snacks/${snack.id}`}>
        <img src={snack.image} alt={snack.name}></img>
      </Link>
      <h4>{snack.name}</h4>
    </div>
  );
}

export default Snack;
