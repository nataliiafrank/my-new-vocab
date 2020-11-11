import React, { useState } from "react";
import styles from './form.scss';

const Form = () => {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="user-input">
          Word or Phrase
          <input id="user-input" type="text" />
        </label>
        <label htmlFor="topic">
          Topic
          <select name="topic" id="topic">
            <option value="">Choose the topic</option>
            <option value="greeting">Greeting</option>
            <option value="eating-out">Eating Out</option>
          </select>
        </label>
        <span>OR</span>
        <label htmlFor="new-topic">
          New Topic
          <input id="new-topic" type="text" />
        </label>
      </div>

      <div>
        <label htmlFor="translation">
          Translation
          <input id="translation" type="text" />
        </label>

        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
