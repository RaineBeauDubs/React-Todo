import React from 'react';

function TodoForm(props) {
  return (
    <form onSubmit={props.addToList}>
      <input
      type="text"
      name="inputText"
      placeholder="Add New ToDo..."
      className="add-box"
      value={props.inputText}
      
      onChange={props.changes} />
      <button>Add</button>
      <button type="clear">Clear Completed</button>
    </form>
  )
}

export default TodoForm;