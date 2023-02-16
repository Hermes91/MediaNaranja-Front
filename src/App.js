import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/Navbar/Navbar";
import SearchbyUser from "./components/Filters/UserFilter";
import StoreFilter from "./components/Filters/StoreFilter";

function App() {
  return (
    <div className="App">
      <div><NavBar /></div>
      <div>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/filters" element={<StoreFilter/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
