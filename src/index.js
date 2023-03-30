import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Toaster from "./Toaster";
import store from "./redux/store/storeIndex";

console.log(process.env.REACT_APP_URL_BACK);
axios.defaults.baseURL = "https://concursos2.lamedianaranja.com.co/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
