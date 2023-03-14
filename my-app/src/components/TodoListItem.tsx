import React from "react";

const TodoListItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoListItem;
