import React from "react";
import ReactDOM from "react-dom";
import Vocabulary from "./Vocabulary";
import styles from './app.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <Vocabulary />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
