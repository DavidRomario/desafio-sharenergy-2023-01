import React, { useState, useEffect } from "react";
import { useApp } from "../../hooks/appContent";
import Default from "../templates/Default";

export default function StatusCodeCat() {
  const { input } = useApp();
  const [image, setImage] = useState([]);
  async function fetchStatusCodeCat() {
    const response = `https://http.cat/${parseInt(input)}`;
    setImage(response);
  }

  console.log(">", input);

  return (
    <Default>
      <div id="container">
        <h1 className="title">Status Code</h1>
        <div className="title">
          <button className="refresh" onClick={fetchStatusCodeCat}>
            Search
          </button>
        </div>
        <main>
          <img id="pic" src={image} alt="" />
        </main>
      </div>
    </Default>
  );
}
