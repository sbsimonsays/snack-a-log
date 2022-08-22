import { Link } from "react-router-dom";
import "../Styles/Stylin.css";

function Nav() {
  return (
    <div>
    <nav>
      <Link to="/" className="navSnacks">Snacks</Link>
      <Link to="/snacks/new">New Snack</Link>
      <Link to="/snacks">List of Snacks</Link>
    </nav>
    </div>
  );
}

export default Nav;
