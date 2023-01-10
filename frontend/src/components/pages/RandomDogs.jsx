import React, { useEffect } from "react";
import Default from "../templates/Default";

export default function RandomDogs() {
  const [dogs, setDogs] = React.useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogs(data));
  }, []);

  const HandleConfirmClick = (event) => {
    window.location.reload();
  };

  return (
    <Default>
      <div id="container">
        <h1 className="title">Click</h1>
        <div id="search">
          <button className="refresh" onClick={HandleConfirmClick}>
            Refresh
          </button>
        </div>
        <img id="pic" src={dogs.message} alt="" />
      </div>
    </Default>
  );
}
