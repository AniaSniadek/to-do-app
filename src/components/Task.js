import React from 'react';

const Task = (props) => {
    const { text, date, id, active, finishDate, important } = props.task

    const style = {
        color: 'red'
    }

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> - to <span>{date} </span>
                    <button className="btn btn-success" onClick={() => props.change(id)}>Done</button>
                    <button className="btn btn-danger" onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {
        const finishTime = new Date(finishDate).toLocaleString()

        return (
            <div>
                <p>
                    <strong>{text}</strong><em>(make to {date}) </em><br />
                    - confirmation of performance <span>{finishTime} </span>
                    <button className="btn btn-danger" onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    }
}
 
export default Task;