import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [input, setInput] = useState("");

    const handleButtonClick = () =>{
        if(input.trim()){
            addTask(input)
            setInput("")
        }
    }
    


    return(
        <div className='flex space-x-4 mb-4'>
            <input type="text" 
            className='p-2 rounded border-2 border-gray-300' 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Add a task'
             />

             <button
             className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded'
             onClick={handleButtonClick}
             >
                Add Task
             </button>
        </div>
    )
};

export default TaskInput;