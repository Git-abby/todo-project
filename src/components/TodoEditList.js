import React, { useState } from 'react'
import UnarchiveIcon from '@mui/icons-material/Unarchive';

function TodoEditList({task, updateTodo}) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        //edit task fun from Todo Wrapper
        updateTodo(value, task.id);
    }

  return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        
        placeholder="Update your task here"
      />
      <button type="submit"><UnarchiveIcon /></button>
    </form>
  )
}

export default TodoEditList