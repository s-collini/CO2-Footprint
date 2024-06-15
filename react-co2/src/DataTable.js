import React, { useState } from "react";

const DataTable = ({ data }) => {
  const [sort, setSort] = useState(null);

  const sortData = (key) => {
    setSort(key);
  };

  const sortedData = React.useMemo(() => {
    if (sort) {
      return [...data].sort((a, b) => {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
      });
    }
    return data;
  }, [data, sort]);

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortData("Land")}>Land</th>
          <th onClick={() => sortData("Unternehmen")}>Unternehmen</th>
          <th onClick={() => sortData("CO2_Ausstoß")}>
            CO<sub>2</sub>-Ausstoß/Jahr(Mt)
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
  );
};

export default DataTable;
