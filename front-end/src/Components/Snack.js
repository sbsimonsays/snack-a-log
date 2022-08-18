import React from "react";

function Snack({ snack }) {
  return (
    <div>
      {/* <img src={snack.image} alt={snack.name} width="500" height="600"></img>  */}
      <h4>{snack.name}</h4>
    </div>
  );
}

export default Snack;
