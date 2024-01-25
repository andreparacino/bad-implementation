import { useState } from "react";
import styles from "./AddTodo.module.css";
import notifyIcon from "./assets/bell.svg";
import flagIcon from "./assets/flag.svg";
import PilledRadioGroup from "./PilledRadioGroup";

const AddTodo = ({ add }) => {
  const [todoNotify, setTodoNotify] = useState(false);
  const [todoPriority, setTodoPriority] = useState("low");
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <div className={styles.AddTodo}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />

      <div className={styles["AddTodo-settings"]}>
        <img
          className={styles["AddTodo-settings-priority"]}
          src={flagIcon}
          alt=""
          style={{
            backgroundColor:
              todoPriority === "low"
                ? "#84a98c"
                : todoPriority === "medium"
                ? "#e9c46a"
                : "#e56b6f",
          }}
        />
        <PilledRadioGroup
          options={[
            { label: "Low", value: "low" },
            { label: "Medium", value: "medium" },
            { label: "High", value: "high" },
          ]}
          selected={todoPriority}
          onChange={setTodoPriority}
        />
        |
        <img
          role="button"
          src={notifyIcon}
          alt="notify"
          className={styles["AddTodo-settings-notify"]}
          style={{
            backgroundColor: todoNotify ? "lightblue" : "transparent",
            cursor: "pointer",
          }}
          onClick={() => setTodoNotify(!todoNotify)}
        />
        |
        <button
          onClick={() =>
            add({
              title: todoTitle,
              priority: todoPriority,
              complete: false,
              notify: todoNotify,
            })
          }
          disabled={!todoTitle.trim().length}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
