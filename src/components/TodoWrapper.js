import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import TodoEditList from "./TodoEditList";
import Heading from "./Heading";

//CSS
function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  console.log(todos.length);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const toggleEditable = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };
  const updateTodo = (task, id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, task, isEditing: !todo.isEditing }
          : todo;
      })
    );
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
    console.log(todos);
  };
  //   console.log(todos);
  return (
    <div className="mt-8 p-2 flex flex-col justify-center items-center gap-y-6 max-w-lg relative w-full">
      <Heading />
      <TodoForm addTodo={addTodo} />

      {/* Rendering All todos */}

      {todos.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400 text-2xl">No todos available</p>
        </div>
      ) : (
        <div className="relative w-full bg-slate-800 text-white rounded-xl flex flex-col items-start justify-start max-h-96 overflow-y-auto custome-scroll">
          {todos &&
            todos.map((todo) => {
              return todo.isEditing ? (
                <TodoEditList updateTodo={updateTodo} task={todo} />
              ) : (
                <TodoList
                  key={todo.id}
                  task={todo}
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                  toggleEditable={toggleEditable}
                />
              );
              //console.log(todo.task);
            })}
        </div>
      )}
    </div>
  );
}

export default TodoWrapper;
