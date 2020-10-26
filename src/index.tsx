import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./Hello";
import BarChart from "./BarChart";
import Message from "./Message";

import "./styles.css";

const initialState = {
  name: "Manny",
  message: "Typescript is cool!!"
};

type State = Readonly<typeof initialState>;

class App extends React.Component<any, State> {
  readonly state: State = initialState;

  render() {
    return (
      <div className="App">
        <h1>Hello React TSX</h1>
        <h2>TypeScript now works in CRA!</h2>
        <Message name={this.state.name} message={this.state.message} />

        <Hello type="TypeScript" />
        <BarChart />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
