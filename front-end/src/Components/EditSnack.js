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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Snack"
          required
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          name="Protein Amount"
          value={snack.protein}
          onChange={handleNumberChange}
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          name="Fiber Amount"
          value={snack.fiber}
          onChange={handleNumberChange}
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          name="Added Sugar"
          value={snack.added_sugar}
          onChange={handleNumberChange}
        />
        <label htmlFor="url">Image URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          value={snack.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <br></br>
        {/* <Button variant="success" type="submit"> */}
        <input type="submit">FINISH</input>
        {/* </Button> */}
      </form>
      <Link to={`/snacks/${index}`}>
        BACK
        {/* <Button variant="secondary">BACK</Button> */}
      </Link>
    </div>
  )
}

export default EditSnack;
