import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./Hello";
import BarChart from "./BarChart";

import "./styles.css";

function App() {
  let firstValue: string = "Manny";

  return (
    <div className="App">
      <h1>Hello React TSX</h1>
      <h2>TypeScript now works in CRA!</h2>
      <p>
        {" "}
        The value {firstValue} is of {typeof firstValue} type!
      </p>

      <Hello type="TypeScript" />
      <BarChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
