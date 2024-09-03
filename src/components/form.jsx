import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'; // Ensure the 'heroicons' package is installed

export default function CustomForm({ addTask }) { //we are taking the addTask function as a prop. it is from the App.jsx

  const [task, setTask] = useState('');

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    if (task.trim()) {  // Only add the task if the input is not just whitespace
      addTask({
        name: task,
        checked: false,
        id: Date.now(), // Use current timestamp as a unique ID
      });
      setTask(''); // Clear the input field after submission
    }
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
            value={task} // Bind the input field value to the `task` state
            onChange={(e) => setTask(e.target.value)} // Update `task` state on input change
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
