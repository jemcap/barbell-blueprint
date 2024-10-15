import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/links";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <div>
          <Link to="/">
            <h1>Logo</h1>
          </Link>
        </div>
        <div className="flex gap-8">
          {NAV_LINKS.map((link) => {
            const { id, title, url } = link;
            return (
              <Link key={id} to={`/${url}`}>
                {title}
              </Link>
            );
          })}
          <button>Sign In / Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
