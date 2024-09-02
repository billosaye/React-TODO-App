import { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";

export default function CustomForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    addTask({
        name: task,
        checked: false,
        id: Date.now()
    })


    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="todo">
        <div className="wrapper">
          <input
            type="text"
            id="task"
            className="input"
            autoFocus
            placeholder="Enter Task"
            required
            maxLength={60}
            value={task}
            onChange={(e) => setTask(e.target.value)}
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
