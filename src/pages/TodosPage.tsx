import React, { useState, useEffect } from "react";
import { ToDoForm } from "../components/ToDoForm";
import { TodoList } from "./../components/TodoList";
import { ToDo } from "../interfaces";

import "../index.css";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const localTodos = JSON.parse(
      localStorage.getItem("todos") || "[]"
    ) as ToDo[];
    setTodos(localTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify([...todos]));
  }, [todos]);

  const addHandler = (value: string) => {
    if (value) {
      const newTodo: ToDo = {
        title: value,
        id: Date.now(),
        completed: false
      };
      setTodos(prev => [newTodo, ...prev]);
    }
  };

  const toggleHandler = (todoId: number) => {
    setTodos(prev =>
      prev.map((element: ToDo) => {
        if (element.id === todoId) {
          element.completed = !element.completed;
        }
        return element;
      })
    );
  };

  const removeHandler = (todoId: number) => {
    setTodos(prev => prev.filter(item => item.id !== todoId));
  };

  return (
    <div className="container">
      <ToDoForm onAdd={addHandler} />
      <TodoList
        listTodo={todos}
        toggleHandler={toggleHandler}
        removeHandler={removeHandler}
      />
    </div>
  );
};
