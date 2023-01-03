import React from "react";
import logo from "../../images/download.jpeg";
import Default from "../templates/Default";

export default function StatusCodeCat() {
  return (
    <Default>
      <div id="container">
        <h1 class="title">Status Code</h1>
        <main>
          <img id="pic" src={logo} alt="" />
        </main>
      </div>
    </Default>
  );
}
