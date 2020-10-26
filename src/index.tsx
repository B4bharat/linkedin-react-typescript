import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./Hello";
import BarChart from "./BarChart";

import "./styles.css";

function App() {
  // Tuple
  let aTuple: [string, number] = ["Manny", 34];
  // enum
  enum Codes {
    first = 1,
    second = 2
  }
  // void
  const warning = (): void => {
    console.log("Warning");
  };

  return (
    <div className="App">
      <h1>Hello React TSX</h1>
      <h2>TypeScript now works in CRA!</h2>
      <p>
        {" "}
        The value {aTuple[0]} is of {typeof aTuple[0]} type!
      </p>

      <Hello type="TypeScript" />
      <BarChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
