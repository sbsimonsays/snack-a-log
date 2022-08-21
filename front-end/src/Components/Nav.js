import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">Snacks</Link>
      <Link to="/snacks">List of Snacks</Link>
      <Link to="/snacks/new">New Snack</Link>
    </div>
  );
}

export default Nav;
