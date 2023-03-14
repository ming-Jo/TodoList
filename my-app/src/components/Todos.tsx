import React from "react";
import Todo from "../models/todo";

/**
 * 리액트의 컴포넌트를 제네릭 타입의 함수로 지정하여 사용
 * FC : Functional Component
 **/

// Todo class로 만든 배열을 props로 받는다.

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
