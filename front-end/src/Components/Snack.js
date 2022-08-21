import React from "react";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
// import "../Styles/Stylin.css"; 

function Snack({ snack }) {
  return (
    <div className="Snack">
      <a href={`/snacks/${snack.id}`}>
        <h4><img src={snack.image} alt={snack.is_healthy ? "healthy food" : "unhealthy food"}></img></h4>
      
      <h4><span><img height="15px" width="15px" src={ snack.is_healthy ? heartSolid : heartOutline} alt={snack.is_healthy ? "healthy food" : "unhealthy food"} /> {snack.name}</span></h4></a>
    </div>
  );
}

export default Snack;
