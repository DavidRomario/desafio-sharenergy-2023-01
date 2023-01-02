import React from 'react'
import logo from "../../images/download.jpeg"

export default function StatusCodeCat() {
  return (
   <div id="container">
    <h1 class="title">Status Code</h1>
    <p class="title">Pesquise aqui o status do seu erro e mantenha a calma para resolver.</p>
    <div id="search">
        <input type="search" class="btn" placeholder="Search..."/>
        <button class="bt">Search</button> 
    </div>
    <main>
        <h1 id="status">STATUS</h1>
        <img id="pic" src={logo} alt=""/>
    </main>
</div>
  )
}
