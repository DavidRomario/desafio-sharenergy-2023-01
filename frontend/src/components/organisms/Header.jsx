import React from "react";
import logo from "../../images/download.jpeg";
import { Link } from "react-router-dom";
import { useApp } from "../../hooks/appContent";

export default function Header() {
  const { setInput } = useApp();
  return (
    <div>
      <header>
        <Link to="/">
          <img id="logo" src={logo} alt="" />
        </Link>
        <div id="link">
          <Link to="/random/user" className="tag">
            Random Users
          </Link>
          <Link to="/random/dogs" className="tag">
            Random Dogs
          </Link>
          <Link to="/statuscode" className="tag">
            Status Code Cat
          </Link>
          <Link to="/users" className="tag">
            List Users
          </Link>
        </div>
        <div id="search">
          <input
            onChange={(event) => setInput(event.target.value)}
            type="search"
            className="btn"
            placeholder="Search..."
          />
        </div>
      </header>
    </div>
  );
}
