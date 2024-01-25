import styles from "./Todo.module.css";
import notifyIcon from "./assets/bell.svg";
import flagIcon from "./assets/flag.svg";
import trashIcon from "./assets/trash.svg";

const Todo = ({ todo, onChange, onDelete }) => {
  return (
    <div className={styles.TodoWrapper}>
      <input type="checkbox" checked={todo.complete} onChange={onChange} />

      <div
        className={`${styles.Todo} ${
          todo.complete && styles["Todo--completed"]
        }`}
      >
        <div className={styles["Todo-settings"]}>
          <img
            src={flagIcon}
            alt={todo.priority}
            style={{
              backgroundColor:
                todo.priority === "low"
                  ? "#84a98c"
                  : todo.priority === "medium"
                  ? "#e9c46a"
                  : "#e56b6f",
            }}
          />
          |
          <img
            role="button"
            src={notifyIcon}
            alt="notify"
            style={{
              backgroundColor: todo.notify ? "lightblue" : "transparent",
            }}
          />
        </div>
        <div className={styles["Todo-body"]}>
          <p>{todo.title}</p>
        </div>
      </div>

      <button onClick={onDelete} className={styles["Todo-delete"]}>
        <img src={trashIcon} alt="delete" />
      </button>
    </div>
  );
};

export default Todo;
