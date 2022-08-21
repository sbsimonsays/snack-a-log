import { Link } from "react-router-dom";
import "../Styles/Stylin.css";

function Nav() {
  return (
    <div>
    <nav>
      <Link to="/">Snacks</Link>
      <Link to="/snacks">List of Snacks</Link>
      <Link to="/snacks/new">New Snack</Link>
    </nav>
    </div>
  );
}

export default Nav;
