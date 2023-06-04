import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ItemCard } from "./ItemCard";





export const Menu = () => {
  return (<>
    <nav class="menu">
  
      <Link to="/groups/air">
        <span>airtech</span>
      </Link>
      <Link to="/">

        <span>moto</span>
      </Link>
      <Link to="/groups/car">
        <span>car</span>
      </Link>
      <Link to="/">
        <span>other</span>
      </Link>

    </nav>
    <div className="wrapped-menu">=menu=
      <nav className="pop-menu">
        <Link to="/groups/air">
          <span>airtech</span>
        </Link>
        <hr />
        <Link to="/">
          <span>moto</span>
        </Link>
        <hr />
        <Link to="/groups/car">
          <span>car</span>
        </Link>
        <hr />
        <Link to="/">
          <span>other</span>
        </Link>
      </nav>
    </div>




  </>





  );
}