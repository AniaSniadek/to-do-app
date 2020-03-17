import React from 'react';
import Task from './Task';

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
                <h2>Zadania do zrobienia</h2>
                {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do zrobienia</p>}
            </div>
            <hr />
            <div className="done">
                <h3>Zadania do zrobienia <em>({done.length})</em></h3>
                {done.length > 5 && <span>Wyświetlonych jest jedynie 5 ostatnich elementów</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </div>
    );
}

export default TaskList;