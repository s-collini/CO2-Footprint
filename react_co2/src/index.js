import React from "react";
import ReactDom from "react-dom";
import TableFilter from "./TableFilter";
import "./css/styles.css";

// Erstellen einer Root für die React-Anwendung und Zuordnen zur index.html-Datei im section-Tag mit der ID "root"
const root = ReactDom.createRoot(document.getElementById("root"));

//Rendern der React-Komponente in root
root.render(<TableFilter />);
