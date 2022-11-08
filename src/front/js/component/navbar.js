import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React-Boilerplate Home</span>
        </Link>
        {/* <div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div> */}
        <div className="ml-auto">
          <Link to="/signup">
            <button className="btn btn-primary" style={{ margin: "10px" }}>
              Login
            </button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
