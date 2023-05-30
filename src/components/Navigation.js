import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/">Main (All Memes)</NavLink>
        </li>
        <li>
          <NavLink to="/regular">Regular</NavLink>
        </li>
        <li>
          <NavLink to="/hot">Hot</NavLink>
        </li>
        <li>
          {/* <NavLink to="/add_meme">Add meme</NavLink> */}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
