import React, { useRef } from "react";
import "../index.css";

type Props = {
    onAdd: (title: string) => void;
}


export const ToDoForm: React.FC<Props> = ({onAdd}) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
        onAdd( ref.current!.value)
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        id="title"
        placeholder="write your todo"
      />
      <label htmlFor="title" className="active">
        write your todo
      </label>
    </div>
  );
};
