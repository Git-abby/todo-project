import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

function TodoList({ task, deleteTodo, toggleComplete, toggleEditable }) {

  const [show, setShow] = useState(false);

  console.log('Transition', show);
  useEffect(() => {
     // Delay to ensure the component has mounted before applying the transition
     setTimeout(() => {
      setShow(true);
    }, 100);
  }, [])
  return (
    <div className={` ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} w-full p-3 text-white rounded-2xl flex items-center justify-between bg-slate-800 hover:bg-slate-700 transition-colors`}>
      {/* If completed, then LINE-THROUGH : REGULAR */}
      <p
        className={`${
          task.completed ? "line-through" : ""
        } capitalize cursor-pointer`}
        onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div className="flex items-center gap-x-3">
        <EditIcon
          className="w-5 h-5 cursor-pointer hover:text-gray-300"
          onClick={() => toggleEditable(task.id)}
        />
        <CloseIcon
          className="w-5 h-5 cursor-pointer hover:text-gray-300"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
}

export default TodoList;
