import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Button from "react-bootstrap/Button";

const API = process.env.REACT_APP_API_URL;

function EditSnack() {
  let { index } = useParams();
  const nav = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image: "",
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setSnack({
      ...snack,
      [event.target.id]: Number(event.target.value),
    });
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${index}`)
      .then((response) => setSnack(response.data))
      .catch((error) => console.error(error));
  }, [index]);

  const updateSnack = () => {
    axios
      .put(`${API}/snacks/${index}`, snack)
      .then((response) => {
        setSnack(response.data);
        nav(`/snacks/${index}`);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack();
  };

  return (
    <div className="Edit">
      <h1>Edit Snack</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          id="name"
          type="text"
          value={snack.name}
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br></br>
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          value={snack.fiber}
          placeholder="Fiber"
          onChange={handleTextChange}
          required
        />
        <br></br>
        <label htmlFor="protein">Protein:</label>
        <input
          name="protein"
          id="protein"
          type="number"
          value={snack.protein}
          onChange={handleNumberChange}
          placeholder="Protein"
          required
        />
        <br></br>
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          name="added_sugar"
          id="addedsugar"
          type="number"
          value={snack.added_sugar}
          onChange={handleTextChange}
          placeholder="Category"
          required
        />
        <br></br>
        <label htmlFor="image">Image URL:</label>
        <input
          name="image"
          id="image"
          type="text"
          value={snack.image}
          onChange={handleTextChange}
          placeholder="Image URL"
          required
        />
        <br></br>
        {/* <Button variant="success" type="submit"> */}
        <input type="submit">FINISH</input>
        {/* </Button> */}
      </form>
      <Link to={`/snacks/${index}`}>
        {/* <Button variant="secondary">BACK</Button> */}
      </Link>
    </div>
  );
}

export default EditSnack;
