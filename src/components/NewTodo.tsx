import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value.trim();
    if (enteredText.length === 0) {
      // Throw error
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form action="#" onSubmit={formSubmitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={inputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;