import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div><NavBar /></div>
      <div>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
