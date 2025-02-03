import styles from "./style.module.css";
import { convert } from "../../lib/convert";

const ToDoItem = ({ task, onComplete, onCancel, onRemove, id }) => {
  const st = task.done ? styles.completed : styles.task;
  return (
    <div className={st}>
      <h3>{task.text}</h3>
      <p>
        added on <b>{convert(task.timeAdded)}</b>
      </p>
      {task.timeComplited && <p>completed on {convert(task.timeComplited)}</p>}
      {!task.done ? (
        <>
          <button onClick={() => onComplete(task)}>Complete</button>
          <button className={styles.red} onClick={() => onRemove(id)}>
            Delete
          </button>
        </>
      ) : (
        <>
          <button onClick={() => onCancel(task)}>Cencel</button>
          <button className={styles.red} onClick={() => onRemove(id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
