import React from "react";
import classes from "./TodoListItem.module.css";

// 타입에서 onRemoveTodo: (event: React.MouseEvent) => void; 매개변수의 값을 마우스이벤트로 지정할 수도 있지만 생략해도 됨
const TodoListItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoListItem;
