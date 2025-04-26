import React, { useState } from "react";

const Input = ({ note = [], setNote = () => {} }) => {
  const [task, setTask] = useState("");
  const noteAdd = () => {
    if (task === "") return;
    setNote(task);
    setTask("");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        top: "100px",
        left: "600px",
        width: "250px",
        height: "50px",
        background: "lightgray",
        padding: "5px",
        border: "1px solid black",
      }}
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          noteAdd();
        }}
        style={{
          padding: "5px",
          border: "1px solid black",
          margin: "2px",
          borderRadius: "5px",
          background: "lightgreen",
          width: "55px",
        }}
      >
        ➕
      </button>
    </div>
  );
};

export default Input;
