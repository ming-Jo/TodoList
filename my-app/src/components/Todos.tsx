import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoListItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          // bind() : 첫번째 인자=호출될 함수 내에서 무엇을 가리키는지, 두번째 인자=onRemoveTodo()가 매개변수로 받을 것
        />
      ))}
    </ul>
  );
};

export default Todos;
