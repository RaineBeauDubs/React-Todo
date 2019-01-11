import React from 'react';

import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
    {props.todoList.map((todo, index) => {
      return (
        <Todo 
          todo={todo} 
          toggleCompleted={props.toggleCompleted}
          completed={todo.completed}
          key={index}
        />
      );
    })}
    </div>
  )
}




export default TodoList;