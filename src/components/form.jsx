import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid"; // Ensure the 'heroicons' package is installed to use the PlusIcon component

export default function CustomForm({ addTask }) {
  // `CustomForm` component uses `addTask` function passed as a prop to handle adding new tasks.
  const [task, setTask] = useState(""); // State to hold the current value of the task input field

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload).

    addTask({
      // Calls `addTask` with a new task object.
      // Each task has a name, a checked status (default is false), and a unique ID (current timestamp).
      name: task,
      checked: false,
      id: Date.now(),
    });

    setTask(""); // Resets the input field by clearing the `task` state.
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="todo">
        {/* Triggers handleFormSubmit when the form is submitted */}
        <div className="wrapper">
          <input
            type="text"
            id="task"
            className="input"
            autoFocus
            placeholder="Enter Task"
            required
            maxLength={60}
            value={task} // Binds the input field value to the `task` state
            onChange={(e) => setTask(e.target.value)} // Updates `task` state with the input field's current value
          />
          <label htmlFor="task" className="label">
            Enter Task
          </label>
        </div>
        <button className="btn" aria-label="Add Task" type="submit">
          <PlusIcon className="size-6 text-blue-500" />
        </button>
      </form>
    </div>
  );
}
