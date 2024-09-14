import React, { useState } from "react";
import "./index.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return <div className="bg-[#c8c8c8] min-h-screen w-full flex flex-col items-center">
    <h1 className="text-4xl font-bold">To-do-list</h1>

    <div className="rounded border-gray-600 bg-white mt-20 h-auto">
      <TaskInput addTask={addTask}></TaskInput>
      <TaskList tasks={tasks} deleteTask={deleteTask}></TaskList>
    </div>
  </div>;
}
export default App;
