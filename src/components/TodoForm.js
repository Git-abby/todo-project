import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function TodoForm({addTodo}) {
  const [value, setValue] = useState("");
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value){
        //add the todo to list
        addTodo(value);
        //clear the form
        setValue('');
    }
  }
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative px-4 sm:px-6">
      <div className="relative">

      <input
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-4 rounded-full bg-slate-800 focus:outline-none placeholder:text-gray-400 focus:text-gray-200"

        placeholder="Add today's task here"
      />
      <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-900 rounded-full text-white"><ArrowForwardIcon /></button>
      </div>
    </form>
  );
}

export default TodoForm;
