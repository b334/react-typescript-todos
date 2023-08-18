import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value.trim();
    if (enteredText.length === 0) {
      // Throw error
      return;
    }
    inputRef.current!.value = "";
    todosCtx.addTodo(enteredText);
  };
  return (
    <form action="#" onSubmit={formSubmitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input ref={inputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
