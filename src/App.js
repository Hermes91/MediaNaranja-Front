import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route exact path="/" element={<NavBar />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
