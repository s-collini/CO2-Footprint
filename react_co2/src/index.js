import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./css/styles.css";

const dataTable = ReactDom.createRoot(document.getElementById("dataTable"));

dataTable.render(
  <StrictMode>
    <App />
  </StrictMode>
);
