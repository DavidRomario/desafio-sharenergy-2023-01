import React from "react";
import logo from "../../images/download.jpeg";

export default function Header() {
  return (
    <div>
      <header>
        <img id="logo" src={logo} alt="" />
        <ul>
          <ol>Random Users</ol>
          <ol>Random Dogs</ol>
          <ol>Status Code Cat</ol>
          <ol>List Users</ol>
        </ul>
        <div id="search">
          <input type="search" className="btn" placeholder="Search..." />
          <button className="bt">Search</button>
        </div>
      </header>
    </div>
  );
}
