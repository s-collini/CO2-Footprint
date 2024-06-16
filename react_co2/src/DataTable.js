import React, { useState } from "react";

const DataTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const sortData = (data) => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = sortData(data);

  return (
    <div class="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th class="th" onClick={() => requestSort("Land")}>
              {" "}
              Land{" "}
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
