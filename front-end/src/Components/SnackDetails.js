import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";

import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function SnackDetails() {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data.payload);
    });
  }, [id, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((err) => console.error("catch", err));
  };

  const handleDelete = () => {
    deleteSnack();
  };

  return (
    <div className="Snackdetails">
      <article>
         <h2> <img src={snack.image}></img> </h2>
        <h3>
          {snack.is_healthy 
          ? <span> <img src={heartSolid}></img> </span> 
          : <span> <img src={heartOutline}></img> </span>}
          {snack.name}
        </h3>
        <h5>Fiber: {snack.fiber}</h5>
        <h5>Protein: {snack.protein}</h5>
        <h5>Sugar: {snack.added_sugar} </h5>
        <div className="showNavigation">
          <div>
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default SnackDetails;
