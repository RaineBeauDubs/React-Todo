import React from 'react';

function Todo(props) {
  const { toggleCompleted } = props;
  return (
  <p 
    className={props.completed ? 'completed' : null}
    style={{ textDecoration: props.completed ? 'line-through' : null}}
    onClick={() => toggleCompleted(props.todo.id)}
  >
    {props.todo.task}
  </p>)
}

export default Todo;