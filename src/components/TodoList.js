import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";


function TodoList({ task, deleteTodo, toggleComplete, toggleEditable }) {
  return (
    <div className="w-full p-3 text-white rounded-2xl flex items-center justify-between">
      {/* if it's completed then LINE-THROUGH : REGULAR */}
      <p
        className={`${task.completed ? "line-through" : " "} capitalize`}
        onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div className="flex items-center justify-center gap-x-4">

      <EditIcon onClick={() => toggleEditable(task.id)} />
      <CloseIcon onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
}

export default TodoList;
