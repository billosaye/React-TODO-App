import React from "react";
import CustomForm from "./components/form";

export default function App() {
 
  // This function will be passed to multiple components. 
  const addTask = (task) => {
    console.log(task)
  }

  return (
    <div className="container">
      <header>
        <h1>TO-DO List</h1>
      </header>
     <CustomForm addTask = {addTask}/>  {/* The function 'addTask' is being passed to the form component.  */} 
    </div>
  );
}
