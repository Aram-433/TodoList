import styles from "./style.module.css";
import { useState } from "react";

const ToDoForm = ({ onAdd, border }) => {
  const [text, setText] = useState("");
  const inputBorder = border ? styles.redBorder : styles.control;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text.trim()) {
          return;
        }
        onAdd({
          id: Date.now() + "-" + parseInt(Math.random() * 1e9),
          text,
          timeAdded: Date.now(),
          timeComplited: null,
          done: false,
        });
        setText("");
      }}
    >
      <input
        type="text"
        className={inputBorder}
        placeholder="Do something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>save</button>
    </form>
  );
};

export default ToDoForm;
