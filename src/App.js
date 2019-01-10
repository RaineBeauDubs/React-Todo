import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'


const todo = [
  {
    task: 'Pet the Cat',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Give the Dogs a Bath',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Walk the Alligator',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Feed the Bats and the Tortoise',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Clean Out the Manta Ray Tank',
    id: Date.now(),
    completed: false
  },
]


class App extends React.Component {
    constructor() {
      super();
      this.state = {
        todoList: todo,
        task: '',
        id: '',
        completed: false,
        inputText: '',
      };
    }

    changes = event => {
      this.setState({inputText: event.target.value});
    };

    addToList = event => {
      event.preventDefault();
      this.setState({
        todoList: [...this.state.todoList, 
          {task: this.state.inputText, id: Date.now(), completed: false}],
          task: ''
      })
    }

  render() {
    return (
      <div className='app'>
        <h2>My ToDo List</h2>
        <TodoList todoList={this.state.todoList} task={this.state.task} />
        <TodoForm 
        addToList={this.addToList}
        inputText={this.state.inputText} 
        changes={this.changes} />
      </div>
    );
  }
}

export default App;
