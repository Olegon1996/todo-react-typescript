import React from "react";
import { ToDo } from "../interfaces";
import "../index.css";

type Props = {
  listTodo: ToDo[];
  toggleHandler: (id: number) => void;
  removeHandler: (id: number) => void;
};

export const TodoList: React.FC<Props> = ({
  listTodo,
  toggleHandler,
  removeHandler
}) => {
  if (listTodo.length === 0) {
    return <h1 className='center'>You haven't anything to do</h1>;
  }

  return (
    <ul>
      {listTodo.map(item => {
        const classes = ["todo"];
        if (item.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleHandler(item.id)}
              />
              <span>{item.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => removeHandler(item.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
