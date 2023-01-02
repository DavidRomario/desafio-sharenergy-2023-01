import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Random from "./components/pages/RandomUserList";
import StatusCodeCat from "./components/pages/StatusCodeCat";
import Refresh from "./components/pages/Refresh";
import "./styles/home.css";
import "./styles/random.css";
import "./styles/statuscat.css";
import "./styles/refresh.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/statuscode" element={<StatusCodeCat />} />
        <Route path="/refresh" element={<Refresh />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
