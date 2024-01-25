import { useState } from "react";
import styles from "./App.module.css";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Learn React",
      priority: "high",
      complete: true,
      notify: false,
    },
    {
      title: "Learn React Router",
      priority: "medium",
      complete: false,
      notify: true,
    },
    {
      title: "Learn Redux",
      priority: "low",
      complete: false,
      notify: false,
    },
  ]);

  return (
    <div className={styles.App}>
      <h1>Todos</h1>
      <AddTodo add={(todo) => setTodos([todo, ...todos])} />

      <div className={styles.Todos}>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onChange={(checkbox) => {
              const newArr = [...todos];
              newArr[index].complete = checkbox.target.checked;
              setTodos(newArr);
            }}
            onDelete={() => {
              const newTodos = [...todos];
              newTodos.splice(index, 1);
              setTodos(newTodos);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
