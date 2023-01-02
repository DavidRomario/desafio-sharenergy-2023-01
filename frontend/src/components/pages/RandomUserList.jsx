import React from "react"
import logo from "../../images/download.jpeg"

export default function RandomUserList() {
  return (
    <div>
        <div id="search">
  <input type="search" className="btn" placeholder="Search..."/>
  <button className="bt">Search</button>
  </div>
<section id="user">
  <img src={logo} alt=""/>
  <div className="data">
    <h1>Nome: David</h1>
    <h2>username: @David</h2>
    <p>idade: 25 anos</p>
    <p>email: gmail.com</p>
  </div>
</section>
<section id="user">
  <img src={logo} alt=""/>
  <div className="data">
    <h1>Nome: David</h1>
    <h2>username: @David</h2>
    <p>idade: 25 anos</p>
    <p>email: gmail.com</p>
  </div>
</section>
<section id="user">
  <img src={logo} alt=""/>
  <div className="data">
    <h1>Nome: David</h1>
    <h2>username: @David</h2>
    <p>idade: 25 anos</p>
    <p>email: gmail.com</p>
  </div>
</section>
<section id="user">
  <img src={logo} alt=""/>
  <div className="data">
    <h1>Nome: David</h1>
    <h2>username: @David</h2>
    <p>idade: 25 anos</p>
    <p>email: gmail.com</p>
  </div>
</section>
    </div>
  )
}
