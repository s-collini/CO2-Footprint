import React from "react";
import DataTable from "./index.js";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          CO<sub>2</sub>-Emissionsdaten
        </h1>
      </header>
      <main>
        <DataTable />
      </main>
    </div>
  );
};

export default App;
