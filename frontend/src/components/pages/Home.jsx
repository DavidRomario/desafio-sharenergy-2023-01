import React from "react"
import logo from "../../images/download.jpeg"

export default function Home() {
  return (    <div className="form">
        <div>
            <img src={logo} alt="" />
        </div>
        <h2>Login to your account</h2>
        <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <input type="checkbox"/><label>Remember me</label>
        </form>
    </div>)
}
