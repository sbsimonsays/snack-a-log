import React from "react";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function Snack({ snack }) {
  return (
    <div className="Snack">
      <a href={`/snacks/${snack.id}`}>
        <h4><img src={snack.image} alt={snack.is_healthy ? "healthy food" : "unhealthy food"}></img></h4>
      
      <h4><span><img src={ snack.is_healthy ? heartSolid : heartOutline} alt={snack.is_healthy ? "healthy food" : "unhealthy food"} /> {snack.name}</span></h4></a>
    </div>
  );
}

export default Snack;
