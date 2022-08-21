import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Stylin.css";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewSnack() {
  const nav = useNavigate();
  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image: "",
  });

  const addSnack = () => {
    axios
      .post(`${API}/snacks`, snack)
      .then((response) => nav(`/snacks`))
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setSnack({
      ...snack,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack();
  };

  return (
    <div className="NewPageDiv">
      <section className="snackHealthChart">
        <p>Snack Health is determined by:</p>
        <ul>
          <li>protein is above 5</li>
          <li>or fiber is above 5</li>
          <li>and added sugar is less than 5</li>
        </ul>
      </section>
      <h1>New Snack?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          placeholder="Snack Name"
          onChange={handleTextChange}
        />
        <br></br>
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          value={snack.fiber}
          placeholder="Fiber Amount"
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          value={snack.protein}
          placeholder="Protein Amount"
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          value={snack.added_sugar}
          placeholder="Added Sugar Amount"
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="image">Image:</label>
        <input
          name="image"
          type="text"
          id="image"
          pattern="http[s]*://.+"
          value={snack.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <br></br>
        <input type="submit" />
        {/* <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
  <form>*/}
      <Link to={`/snacks`}>
      <button>NEVERMIND</button>
      </Link>
      </form>
    </div>
  );
}

export default NewSnack;
