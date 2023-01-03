import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Random from "./components/pages/RandomUserList";
import StatusCodeCat from "./components/pages/StatusCodeCat";
import RandomDogs from "./components/pages/RandomDogs";
import Users from "./components/pages/Users";

import "./styles/login.css";
import "./styles/random.css";
import "./styles/statuscat.css";
import "./styles/randomdogs.css";
import "./styles/users.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/random" element={<Random />} />
        <Route path="/statuscode" element={<StatusCodeCat />} />
        <Route path="/randomdogs" element={<RandomDogs />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
