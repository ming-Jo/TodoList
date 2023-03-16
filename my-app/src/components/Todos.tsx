import React from "react";
import Todo from "../models/todo";
import TodoListItem from "./TodoListItem";
import classes from "./Todos.module.css";

/**
 * 리액트의 컴포넌트를 제네릭 타입의 함수로 지정하여 사용
 * FC : Functional Component
 **/

// Todo class로 만든 배열을 props로 받는다.

// TodoListItem의 onRemoveTodo에 들어갈 함수를 App.tsx에서 정의하기 위해 다시 props로 전달한다.

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoListItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          // bind() : 첫번째 인자=호출될 함수 내에서 무엇을 가리키는지, 두번째 인자=onRemoveTodo()가 매개변수로 받을 것
        />
      ))}
    </ul>
  );
};

export default Todos;
