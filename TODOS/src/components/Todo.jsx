import React, { useState } from "react";
import "../style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      text: input,
      id: Date.now(), 
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <button onClick={addTodo} className="btn add-btn">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span className="todo-text">{text}</span>
            <button className="btn delete-btn" onClick={() => removeTodo(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
