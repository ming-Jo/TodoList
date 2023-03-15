import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // null 값이 들어오지 않을 것을 확신할 때 ! 연산자 사용
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // 공백을 제거했을 때 0이면 return
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
