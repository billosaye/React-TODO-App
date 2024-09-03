import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TaskList.module.css";

const TodoList = ({ tasks }) => (
  <ul className={styles.tasks}>
    {tasks  
      .sort((a, b) => b.id - a.id)  //Sort tasks by ID in descending order and map each task to `TodoItem` 
      .map((task) => (
        <TodoItem
          key={task.id} // Use task ID as the key for the list item
          task={task}
        />
      ))}
  </ul>
);

export default TodoList;
