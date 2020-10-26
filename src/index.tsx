import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./Hello";
import BarChart from "./BarChart";
import Message from "./Message";

import "./styles.css";

class App extends React.Component<any> {
  render() {
    return (
      <div className="App">
        <h1>Hello React TSX</h1>
        <h2>TypeScript now works in CRA!</h2>
        <Message name="Bharat" message="this is a simple message" />

        <Hello type="TypeScript" />
        <BarChart />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
