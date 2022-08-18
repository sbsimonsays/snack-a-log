import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Gulp</Link>
      <Link to="/snacks/new">New Snack</Link>
    </div>
  );
}

export default Nav;
