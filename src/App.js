import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import MisCupones from "./components/misCupones/misCupones";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
        </Routes>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/:code" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
