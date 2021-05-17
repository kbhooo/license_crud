import React from "react";
import {Link} from "react-router-dom";

const Nav = ({ userObj }) => (
  <nav>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/profile">{userObj.displayName}의 프로필</Link>
    </li>
  </nav>
);

export default Nav;