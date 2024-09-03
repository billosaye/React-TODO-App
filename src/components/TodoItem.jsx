import React, { useState } from "react";
import styles from "./TaskItem.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

const TodoItem = ({ task }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };







  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          name={task.name}
          id={task.id}
          onChange={handleCheckboxChange} // Add this to handle the change
        />

        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.name} Task`}
          onClick={handleUpdate}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`} //getting btn stlyling form the global css and delete styling from the module.
          aria-label={`Delete ${task.name} Task`}
          onClick={handleDelete}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
