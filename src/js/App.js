import React from "react";
import ReactDOM from "react-dom";
import Vocabulary from "./Vocabulary";

const App = () => {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Vocabulary />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
