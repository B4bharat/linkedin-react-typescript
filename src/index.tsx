import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./Hello";
import BarChart from "./BarChart";
import Message from "./Message";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React TSX</h1>
      <h2>TypeScript now works in CRA!</h2>
      <Message />

      <Hello type="TypeScript" />
      <BarChart />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
