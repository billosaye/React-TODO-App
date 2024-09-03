import React, { useState } from 'react';
import CustomForm from './components/form';
import TodoList from './components/TodoList';

export default function App() {  
  const [todos, setTodos] = useState([]);
  

  // Function to add a new task to the list
  const addTask = (task) => {  //task: This parameter is the new task object with its name, checked status, and unique ID to add to the todos state.
    setTodos(prevState => [...prevState, task]);
  };



  return (
    <div className="container">
      <header>
        <h1>TO-DO List</h1>
      </header>      
      <CustomForm addTask={addTask} />    {/* Pass the `addTask` function to `CustomForm` as a prop */}
     
      {todos && <TodoList tasks={todos} />}    {/* TodoList is displayed only when there are tasks in the todos state, avoiding rendering an empty list  */}
    </div>
  );
}

