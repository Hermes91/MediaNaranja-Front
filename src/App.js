import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
