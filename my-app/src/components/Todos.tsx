import React from "react";

/**
 * 리액트의 컴포넌트를 제네릭 타입의 함수로 지정하여 사용
 * FC : Functional Component
**/

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
