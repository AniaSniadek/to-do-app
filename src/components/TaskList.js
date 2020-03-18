import React from 'react';
import Task from './Task';
import './TaskList.css'

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active === true)
    const done = props.tasks.filter(task => task.active === false)

    done.sort((a, b) => {
        return b.finishDate - a.finishDate
    })

    active.sort((a, b) => {
        a = a.text.toLowerCase()
        b = b.text.toLowerCase()

        if (a.text < b.text) return -1
        if (a.text > b.text) return 1
        return 0
    })

    const activeTasks = active.map(task => (
        <Task key={task.id} task={task} delete={props.delete} change={props.change} />
    ))

    const doneTasks = done.map(task => (
        <Task key={task.id} task={task} delete={props.delete} change={props.change} />
    ))

    return (
        <div>
            <div className="active">
                <h2 className="task-title">Tasks to be done</h2>
                {activeTasks.length > 0 ? activeTasks : <p>No tasks to be done</p>}
            </div>
            <hr />
            <div className="done">
                <h3>Finished tasks <em>({done.length})</em></h3>
                {done.length > 5 && <span>Only the last 5 items are displayed</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </div>
    );
}

export default TaskList;