import { useState } from "react";

export default function CustomForm() {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
            onChange={handleChange}
          />
          <label htmlFor="task">Enter Task</label>
        </div>
      </form>
    </div>
  );
}
