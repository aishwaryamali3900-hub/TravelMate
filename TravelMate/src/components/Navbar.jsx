import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>TravelMate</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/plan-trip">Plan Trip</Link>
        <Link to="/my-trips">My Trips</Link>
      </div>
    </nav>
  );
}

export default Navbar;