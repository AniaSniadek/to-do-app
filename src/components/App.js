import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrać wreszcie w Wiedźmina 3',
        date: new Date().getTime(),
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'zrobić pranie',
        date: new Date().getTime(),
        important: false,
        active: true,
        finishDate: null
      }
    ]
  }

  render() {
    return (
      <div className="App">
        TODO APP
        <AddTask/>
        <TaskList tasks={this.state.tasks}/>
      </div>
  );
  }
}

export default App;
