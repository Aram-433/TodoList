import "./App.css";
import { useEffect, useState } from "react";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(0);
  const [row, setRow] = useState(false);
  const [column, setColumn] = useState(false);
  const [inputBoreder, setInputBorder] = useState(false);

  const addTask = (task) => {
    let findedElement = tasks.find((elm) => elm.text == task.text);
    if (findedElement == undefined) {
      setTasks([task, ...tasks]);
      setInputBorder(false);
    } else {
      setInputBorder(true);
    }
  };

  const doneTask = (task) => {
    task.done = true;
    task.timeComplited = Date.now();
    setTasks([...tasks]);
  };

  const cancelTask = (task) => {
    task.done = false;
    task.timeComplited = null;
    setTasks([...tasks]);
  };

  useEffect(() => {
    setDone(tasks.filter((a) => a.done).length);
  }, [tasks]);

  function removeItem(id) {
    setTasks([...tasks.filter((elm) => elm.id !== id)]);
  }

  return (
    <div className="App">
      <ToDoList
        data={tasks}
        done={done}
        onComplete={doneTask}
        onAdd={addTask}
        onCencel={cancelTask}
        row={row}
        onRow={setRow}
        column={column}
        onColumn={setColumn}
        onRemove={removeItem}
        border={inputBoreder}
      />
    </div>
  );
}

export default App;
