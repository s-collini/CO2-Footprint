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

  const handleFilterLand = (event) => {
    setFilterLand(event.target.value);
  };

  const handleFilterUnternehmen = (event) => {
    setFilterUnternehmen(event.target.value);
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

      <label htmlFor="filterLand">Filtern nach Land:</label>
      <input
        type="text"
        id="filterLand"
        value={filterLand}
        onChange={handleFilterLand}
        placeholder="Land"
      />
      <label htmlFor="filterUnternehmen"> Filtern nach Unternehmen:</label>
      <input
        type="text"
        id="filterUnternehmen"
        value={filterUnternehmen}
        onChange={handleFilterUnternehmen}
        placeholder="Unternehmen"
      />
      <p></p>
      <DataTable data={filterData} />
    </div>
  );
};

export default App;
