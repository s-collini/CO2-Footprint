import React, { useEffect, useState } from "react";
import data from "./data.json";

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  return (
    <div>
      <h3 id="emissions">
        CO<sub>2</sub>-Emissionsdaten
      </h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Land</th>
            <th scope="col">Unternehmen</th>
            <th scope="col">
              Jährlicher CO<sub>2</sub>-Ausstoß (kt)
            </th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {tableData.map((item, index) => (
            <tr key={index}>
              <th scope="row"></th>
              <td>{item.Land}</td>
              <td>{item.Unternehmen}</td>
              <td>{item.CO2 - Ausstoß}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
