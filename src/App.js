import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/index.js";
import { Home } from "./components/Home/index.js";

import Routines from "./components/Routines";
import Activities from "./components/Activities";
import MUILogin from "./components/Login/MUILogin.js";
import MyRoutines from "./components/MyRoutines/index.js";
import MUIRegister from "./components/Register/MUIRegister.js";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/myroutines" element={<MyRoutines token={token} />} />
        <Route path="/login" element={<MUILogin />} />
        <Route path="/register" element={<MUIRegister />} />
      </Routes>
    </div>
  );
}

export default App;
