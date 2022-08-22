import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";

import "../Styles/Stylin.css";
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
    <div className="snackDetails">
      <article className="Snacks">
        <h3>
          {" "}
          {snack.is_healthy
            ? "This Snack is Healthy!"
            : "This Snack is Unhealthy!"}{" "}
        </h3>
        <aside>
          <img
            src={snack.is_healthy ? heartSolid : heartOutline }
            alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
          ></img>
        </aside>
        <div>
          <img src={snack.image} alt={snack.name}></img>
          <h4>{snack.name}</h4>
          <h5>Fiber: {snack.fiber} </h5>
          <h5>Protein: {snack.protein} </h5>
          <h5>Added Sugar: {snack.added_sugar} </h5>
        </div>
      </article>
      <div className="snackNavi">
        <div>
          <Link to={`/snacks`}>
            <button>BACK</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${id}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default SnackDetails;
