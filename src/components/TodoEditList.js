import React, { useState } from 'react'
import UnarchiveIcon from '@mui/icons-material/Unarchive';

function TodoEditList({task, updateTodo}) {
    const [value, setValue] = useState(task.task);
    const [border, setBorder] = useState(false);

    console.log(border);
    const handleSubmit = (e) => {
        e.preventDefault();

        //edit task fun from Todo Wrapper
        updateTodo(value, task.id);
    }
// className={`${task.completed ? "line-through" : " "} capitalize`}
  return (
    <form onSubmit={handleSubmit} onClick={() => setBorder(!border)} className={`${border ? "border border-slate-500" : ""} p-2 flex items-center justify-between w-[100%] relative rounded-full`}>
    <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input w-[100%] bg-transparent focus:outline-none"
        
        placeholder="Update your task here"
      />
      <button type="submit"><UnarchiveIcon /></button>
    </form>
  )
}

export default TodoEditList