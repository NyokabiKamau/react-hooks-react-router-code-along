import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>
, document.getElementById("root"));