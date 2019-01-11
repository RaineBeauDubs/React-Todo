import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
import './components/TodoComponents/Todo.css';

const todo = [
  {
    task: 'Pet the Cat',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Give the Dogs a Bath',
    id: 1528817077287,
    completed: false
  },
  {
    task: 'Walk the Alligator',
    id: 1528817077288,
    completed: false
  },
  {
    task: 'Feed the Bats and the Tortoise',
    id: 1528817077289,
    completed: false
  },
  {
    task: 'Clean Out the Manta Ray Tank',
    id: 1528817077290,
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
        inputText: '',
      };
    }

    changes = event => {
      this.setState({inputText: event.target.value, task: ''});
    };

    addToList = event => {
      event.preventDefault();
      this.setState({
        todoList: [...this.state.todoList, 
          {task: this.state.inputText, id: Date.now(), completed: false}],
          inputText: ''
      })
    }

    toggleCompleted = id => {
      this.setState({
        todoList: this.state.todoList.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
            return todo;
          })
      });
    };

    clearCompleted = event => {
      event.preventDefault();
      this.setState({
        todoList: this.state.todoList.filter(todo => !todo.completed)
      });
    };

  render() {
    return (
      <div className='app'>
        <h1>What ToDo ToDay?</h1>
          <div className='list'>
          <TodoList 
            toggleCompleted={this.toggleCompleted}
            todoList={this.state.todoList} 
            task={this.state.task} 
            todo={this.state.todo}
          />
          <TodoForm 
            addToList={this.addToList}
            inputText={this.state.inputText} 
            changes={this.changes} 
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
