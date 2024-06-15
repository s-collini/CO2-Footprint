import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./css/styles.css";

const root = ReactDom.createRoot(document.getElementById("dataTable"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
