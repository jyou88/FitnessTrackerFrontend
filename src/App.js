// import logo from './logo.svg';
import './index.css';
import Home from "./Component/Home";
import Activities from "./Component/Activities";
import Routines from "./Component/Routines";
import MyRoutines from "./Component/MyRoutines";

function App() {
  return (
    <div className="App">
      <Home />
      <Activities />
      <Routines />
      <MyRoutines />
    </div >
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
