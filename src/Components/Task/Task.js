import React from "react";
import "./Task.css";
const task = () => {
  return (
    <div>
      <p>
        Add A Task <br />
        <input id="titleInput" type="text" placeholder="Title" />
      </p>
      <input id="descripInput" type="text" placeholder="Description" />
      <button type="submit" onClick={this.addTaskHandler}>
        Add Task
      </button>
    </div>
  );
};

export default task;
