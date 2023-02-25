import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home/Home";
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          ></meta>
          <title>Sorteos - La media Naranja</title>
        </Helmet>
        <div>
          <Routes></Routes>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/:code" element={<Home />} />
          </Routes>
        </div>
      </div>
    </HelmetProvider>
  );
}
export default App;
