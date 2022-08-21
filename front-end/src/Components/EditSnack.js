import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../Styles/Stylin.css";

const API = process.env.REACT_APP_API_URL;

function EditSnack() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => setSnack(res.data.payload))
      .catch((err) => console.error(err));
  }, [id, navigate]);

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setSnack({
      ...snack,
      [event.target.id]: Number(event.target.value),
    });
  };

  const editSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editSnack(snack);
  };

  return (
    <div className="Edit">
      <section className="snackHealthChart">
        <p>Snack Health is determined by:</p>
        <ul>
          <li>protein is above 5</li>
          <li>or fiber is above 5</li>
          <li>and added sugar is less than 5</li>
        </ul>
      </section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br></br>
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          required
          value={snack.fiber}
          placeholder="Fiber Count"
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          name="protein"
          value={snack.protein}
          placeholder="Protein Count"
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          name="added_sugar"
          value={snack.added_sugar}
          placeholder="Sugar Count"
          onChange={handleNumberChange}
        />
        <br></br>
        <label htmlFor="image">Image url:</label>
        <input
          id="image"
          value={snack.image}
          type="text"
          onChange={handleTextChange}
        />
        <br />
        <br></br>
        <input type="submit" />
      </form>
      <Link to={`/snacks/${id}`}>
        <button>NEVERMIND</button>
      </Link>
    </div>
  );
}

export default EditSnack;
