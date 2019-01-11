import React from 'react';

function TodoForm(props) {
  return (
    <form>
      {/* this input "controlled" input */}
      <input
      type="text"
      name="inputText"
      placeholder="Add New ToDo..."
      className="add-box"
      value={props.inputText}
      
      onChange={props.changes} />
      <button type="submit" onClick={props.addToList}>Add to List</button>
      <button type="clear" onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  )
}

export default TodoForm;