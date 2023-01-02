import React from 'react'
import logo from "../../images/download.jpeg"

export default function Refresh() {
  return (
 <div id="container">
        <h1 class="title">Clique-me</h1>
        <div id="search">
            <button class="bt">Refresh</button>
        </div>
            <img id="pic" src={logo} alt="" />
    </div>
  )
}
