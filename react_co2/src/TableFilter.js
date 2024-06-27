import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";

const TableFilter = () => {
  const [data, setData] = useState([]);
  const [filterLand, setFilterLand] = useState("");
  const [filterUnternehmen, setFilterUnternehmen] = useState("");

  //Lädt Daten aus data.json-Datei
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Fehler beim Laden der Daten", error));
  }, []);

  // Bereinigt Filter Land
  const handleFilterLand = (event) => {
    const value = event.target.value;

    // Prüft Eingabe auf spezifische Sonderzeichen in Filter Land und gibt Fehlermeldung zurück
    if (/[!?$]/.test(value)) {
      alert(
        "Ungültige Eingabe: Das Suchfeld darf keine Sonderzeichen wie !, ? enthalten."
      );
    }

    // Säubert den Wert mit DOMPurify
    const cleanedValue = window.DOMPurify.sanitize(value);

    // Überprüft, ob DOMPurify Änderungen vorgenommen hat
    if (cleanedValue !== value) {
      alert("Ungültige Eingabe: Das Suchfeld darf keine HTML-Tags enthalten.");
    }

    // setzt gesäuberten Werts "&lt;"
    setFilterLand(cleanedValue);
  };
  // Bereinigt Filter Unternehmen
  const handleFilterUnternehmen = (event) => {
    const value = event.target.value;

    // Prüft Eingabe auf spezifische Sonderzeichen in Filter Unternehmen und gibt Fehlermeldung zurück
    if (/[!?$]/.test(value)) {
      alert(
        "Ungültige Eingabe: Das Suchfeld darf keine Sonderzeichen wie !, ? enthalten."
      );
    }

    // Säubert den Wert mit DOMPurify
    const cleanedValue = window.DOMPurify.sanitize(value);

    // Überprüft, ob DOMPurify Änderungen vorgenommen hat
    if (cleanedValue !== value) {
      alert("Ungültige Eingabe: Das Suchfeld darf keine HTML-Tags enthalten.");
    }
    // setzt gesäuberten Werts "&lt;"
    setFilterUnternehmen(cleanedValue);
  };

  const filterData = data.filter(
    (item) =>
      item.Land.toLowerCase().includes(filterLand.toLowerCase()) &&
      item.Unternehmen.toLowerCase().includes(filterUnternehmen.toLowerCase())
  );

  return (
    <div>
      <h3 id="emissions">
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

export default TableFilter;
