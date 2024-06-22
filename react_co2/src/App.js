import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import "./css/styles.css";

const App = () => {
  const [data, setData] = useState([]);
  const [filterLand, setFilterLand] = useState("");
  const [filterUnternehmen, setFilterUnternehmen] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Fehler beim Laden der Daten", error));
  }, []);

  // Event-Handler bereinigt Filter Land
  const handleFilterLand = (event) => {
    const value = event.target.value;

    // Überprüft auf spezifische Sonderzeichen
    if (/[!?$]/.test(value)) {
      alert(
        "Ungültige Eingabe: Das Suchfeld darf keine Sonderzeichen wie !, ? enthalten."
      );
    }

    // Säubert des Werts mit DOMPurify
    const sanitizedValue = window.DOMPurify.sanitize(value);

    // Überprüft, ob DOMPurify Änderungen vorgenommen hat
    if (sanitizedValue !== value) {
      alert("Ungültige Eingabe: Das Suchfeld darf keine HTML-Tags enthalten.");
    }

    // Setzen des gesäuberten Werts
    setFilterLand(sanitizedValue);
  };
  // Event-Handler bereinigt Filter Unternehmen
  const handleFilterUnternehmen = (event) => {
    const value = event.target.value;

    // Überprüft auf spezifische Sonderzeichen
    if (/[!?$]/.test(value)) {
      alert(
        "Ungültige Eingabe: Das Suchfeld darf keine Sonderzeichen wie !, ? enthalten."
      );
    }

    // Säubert des Werts mit DOMPurify
    const sanitizedValue = window.DOMPurify.sanitize(value);

    // Überprüft, ob DOMPurify Änderungen vorgenommen hat
    if (sanitizedValue !== value) {
      alert("Ungültige Eingabe: Das Suchfeld darf keine HTML-Tags enthalten.");
    }
    setFilterUnternehmen(sanitizedValue);
  };

  const filterData = data.filter(
    (item) =>
      item.Land.toLowerCase().includes(filterLand.toLowerCase()) &&
      item.Unternehmen.toLowerCase().includes(filterUnternehmen.toLowerCase())
  );

  return (
    <div>
      <h3>
        CO<sub>2</sub>-Emissionstabelle
      </h3>

      <label htmlFor="filterLand">Filtern:</label>
      <input
        type="text"
        id="filterLand"
        value={filterLand}
        onChange={handleFilterLand}
        placeholder="nach Land"
      />
      <label htmlFor="filterUnternehmen"></label>
      <input
        type="text"
        id="filterUnternehmen"
        value={filterUnternehmen}
        onChange={handleFilterUnternehmen}
        placeholder="nach Unternehmen"
      />
      <p></p>
      <DataTable data={filterData} />
    </div>
  );
};

export default App;
