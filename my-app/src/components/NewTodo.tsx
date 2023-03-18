import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // null 값이 들어오지 않을 것을 확신할 때 ! 연산자 사용
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // 공백을 제거했을 때 0이면 return
      return;
    }

    todosCtx.addTodo(enteredText);

    if (todoTextInputRef !== undefined) {
      todoTextInputRef.current!.value = "";
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
