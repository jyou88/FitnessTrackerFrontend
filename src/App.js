// import logo from './logo.svg';
import './index.css';
import React from 'react';
import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Activities from "./Component/Activities/Activities";
import Routines from "./Component/Routines/Routines";
import MyRoutines from "./Component/MyRoutines/MyRoutines";
import Navbar from "./Component/Navbar/Navbar";
import MUILogin from "./Component/Login/Login";
import MUIRegister from "./Component/Register/Register.js";


export const LoginContext = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);
  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home token={token} setToken={setToken} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/myroutines" element={<MyRoutines />} />
          <Route path="/login" element={<MUILogin />} />
          <Route path="/register" element={<MUIRegister />} />
        </Routes></div>
    </LoginContext.Provider>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
