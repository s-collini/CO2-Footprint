import React, { useEffect, useState } from "react";
import "./css/styles-flexbox-mediaqueries.css";
import data from "./json/data.json";

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
            <th>Land</th>
            <th>Unternehmen</th>
            <th>
              Jährlicher CO<sub>2</sub>-Ausstoß (Mt)
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
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
