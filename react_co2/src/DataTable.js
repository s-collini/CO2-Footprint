import React, { useState } from "react";

//Konstante Variable, um Sortierung von Schlüssel und Richtung zu speichern
const DataTable = ({ data }) => {
  const [sorting, setSorting] = useState({ key: "", direction: "" });

  const sortData = (data) => {
    // Wenn sorting.key nicht gesetzt ist, werden die Daten unverändert zurückgegeben
    if (!sorting.key) return data;
    // Eine kopierte Version der Daten wird sortiert und zurückgegeben
    return [...data].sort((a, b) => {
      if (a[sorting.key] < b[sorting.key]) {
        return sorting.direction === "ascending" ? -1 : 1;
      }
      if (a[sorting.key] > b[sorting.key]) {
        return sorting.direction === "ascending" ? 1 : -1;
      }
      // keine Änderung in der Reihenfolge, wenn die Werte gleich sind
      return 0;
    });
  };

  const requestSort = (key) => {
    //Standardsortierung aufsteigend
    let direction = "ascending";
    //wenn Sortierung bereits aufsteigend, dann auf absteigend wechseln
    if (sorting.key === key && sorting.direction === "ascending") {
      direction = "descending";
    }
    //Aktualisierung der Sortierung mit neuem Schlüssel und Richtung
    setSorting({ key, direction });
  };
  //Daten sortieren und in sortedData speichern
  const sortedData = sortData(data);

  return (
    <div class="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th class="th" onClick={() => requestSort("Land")}>
              Land
            </th>
            <th class="th" onClick={() => requestSort("Unternehmen")}>
              Unternehmen
            </th>
            <th>
              CO<sub>2</sub>-Ausstoß/Jahr in Mt
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.Land}</td>
              <td>{item.Unternehmen}</td>
              <td>{item.CO2_Ausstoß}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
