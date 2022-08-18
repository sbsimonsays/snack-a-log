import React, { useState, useEffect } from "react";
import axios from "axios";
import Snack from "../Components/Snack";

const API = process.env.REACT_APP_API_URL;
function Snacks() {
  const [snax, setSnax] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setSnax(res.data);
        console.log(snax);
      })
      .catch((err) => console.error(err));
  }, [snax]);
  
  return (
    <div>
      <section>
        {snax.map((snack) => (
          <Snack key={snack.id} snack={snack} />
        ))}
      </section>
    </div>
  );
}

export default Snacks;
