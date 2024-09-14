import React from "react";

interface TaskListProps {
  tasks: string[];
  deleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <ul className="w-full max-w-md">
      {tasks.map((task, index) => (
        <li key={index} className="flex justify-between items-center mb-2 border-b-2">
          <span className="p-2">{task}</span>
          <button
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
            onClick={() => deleteTask(index)}
          >Delete Task</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;