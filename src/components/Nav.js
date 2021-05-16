import React from "react";
import {Link} from "react-router-dom";

const Nav = () => (
  <nav>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/profile">MyProfile</Link>
    </li>
  </nav>
);

export default Nav;