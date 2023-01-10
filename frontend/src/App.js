import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import RandomUser from "./components/pages/RandomUserList";
import StatusCodeCat from "./components/pages/StatusCodeCat";
import RandomDogs from "./components/pages/RandomDogs";
import Users from "./components/pages/Users";
import { AppProvider } from "./hooks/appContent";

import "./styles/login.css";
import "./styles/random.css";
import "./styles/statuscat.css";
import "./styles/randomdogs.css";
import "./styles/users.css";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/random/user" element={<RandomUser />} />
          <Route path="/statuscode" element={<StatusCodeCat />} />
          <Route path="/random/dogs" element={<RandomDogs />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
