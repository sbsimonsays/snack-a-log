import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";

import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
// import HeartHealth from "./HeartHealth";

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
    <div className="Snacks">
      <article>
        <div>
          <h4><img
            src={snack.is_healthy ? heartSolid : heartOutline}
            alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
          ></img></h4>
        <h3>
          {" "}
          {snack.is_healthy
            ? "This Snack is Healthy!"
            : "This Snack is Unhealthy!"}{" "}
        </h3>
          </div>
        <div>
          <img src={snack.image} alt={snack.name}></img>
          <br></br>
          <h4><strong>{snack.name}</strong></h4>
          <h5>
            <strong>Fiber:</strong> {snack.fiber}{" "}
          </h5>
          <h5>
            <strong>Protein:</strong> {snack.protein}{" "}
          </h5>
          <h5>
            <strong>Added Sugar:</strong> {snack.added_sugar}{" "}
          </h5>
        </div>
      </article>
      <div className="snackNavi">
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
    </div>
  );
}

export default SnackDetails;
