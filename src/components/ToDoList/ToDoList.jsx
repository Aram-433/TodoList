import styles from "./style.module.css";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = ({ data, done, ...props }) => {
  const rowAndColumn = props.row
    ? styles.parrentRow
    : props.column
    ? styles.parentColumn
    : styles.parent;
  return (
    <div className={styles.all}>
      <div className={styles.buttons}>
        <button onClick={() => props.onRow(!props.row)}>Row</button>
        <button onClick={() => props.onColumn(!props.column)}>Column</button>
      </div>
      <div className={styles.container}>
        <h1>To Do List</h1>
        <ToDoForm onAdd={props.onAdd} border={props.border} />
        <div className={rowAndColumn}>
          {data.map((item, index) => {
            return (
              <ToDoItem
                key={item.id}
                task={item}
                onComplete={props.onComplete}
                onCancel={props.onCencel}
                id={item.id}
                onRemove={props.onRemove}
              />
            );
          })}
        </div>
        {data.length > 0 && (
          <h3>
            {done}/{data.length}
          </h3>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
