import { Link } from "react-router-dom";

function Navbar(params) {
  return (
    <nav className="z-50 bg-purple-900">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
