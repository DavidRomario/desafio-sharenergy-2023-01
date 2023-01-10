import React, { useState } from "react";
import logo from "../../images/download.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState(() => {
    const userNameLocalStorage = localStorage.getItem("rememberUserName");
    return userNameLocalStorage;
  });

  const [password, setPassword] = useState(() => {
    const passwordLocalStorage = localStorage.getItem("rememberPassword");
    return passwordLocalStorage;
  });

  const [remember, setRemember] = useState(() => {
    const rememberLocalStorage = localStorage.getItem("remember");
    return rememberLocalStorage === "true";
  });

  const navigate = useNavigate();

  const toggleRemember = () => {
    if (remember) {
      setRemember(false);
      localStorage.removeItem("remember");
      localStorage.removeItem("rememberUserName");
      localStorage.removeItem("rememberPassword");
    } else {
      setRemember(true);
      localStorage.setItem("remember", "true");
      localStorage.setItem("rememberUserName", username);
      localStorage.setItem("rememberPassword", password);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        username: username,
        password: password,
      };

      const request = await axios.post("http://localhost:3010/login", body);

      localStorage.setItem("token", request.data.payload[0]);
      navigate("/random/user");
      return await request.data;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(username, password);
  const handleUserName = (value) => {
    setUsername(value);
    if (remember) {
      localStorage.setItem("rememberUserName", value);
    }
  };
  return (
    <div className="form">
      <div>
        <img src={logo} alt="" />
      </div>
      <h2>Login to your account</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => handleUserName(e.target.value)}
          placeholder="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">login</button>
        <input checked={remember} onChange={toggleRemember} type="checkbox" />
        <label>Remember me</label>
      </form>
    </div>
  );
}
