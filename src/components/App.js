import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'Finally play The Witcher 3',
        date: new Date().getTime(),
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Do the laundry',
        date: new Date().getTime(),
        important: false,
        active: true,
        finishDate: null
      }
    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)

    this.setState({ tasks })
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({ tasks })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    }
    this.counter++

    const tasks = [...this.state.tasks]
    tasks.push(task)
    this.setState({ tasks })

    return true
  }

  render() {
    return (
      <div className="App">
        <AddTask click={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
