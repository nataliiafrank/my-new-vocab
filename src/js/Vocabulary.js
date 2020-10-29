import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const Vocabulary = () => {
  const [name, setName] = useState("French");

  return (
    <>
      <Form />
      <div className="heading">{name}</div>
      <List />
    </>
  );
};

export default Vocabulary;
