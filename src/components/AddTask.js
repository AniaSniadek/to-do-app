import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10)

    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckboxChange = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        const { text, date, checked } = this.state

        if (text.length > 2) {
            const click = this.props.click(text, date, checked)

            if (click) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate
                })
            }
        } else {
            alert('Task name is to short!!!')
        }
    }

    render() {
        let maxDate = Number(this.minDate.slice(0, 4)) + 1
        maxDate = maxDate + '-12-31'

        return (
           <React.Fragment>
            <div className='form'>
            <div className="form-group">
                <input 
                type="text" 
                placeholder="Add task.." 
                value={this.state.text} 
                onChange={this.handleTextChange}
                className="form-control" />
            </div>
            <div className="form-check">
                <input 
                type="checkbox" 
                checked={this.state.checked} 
                id="important" 
                onChange={this.handleCheckboxChange} 
                className="form-check-input"
                /> 
                <label htmlFor="important" className="form-check-label">Priority</label>
            </div>
            <div className="form-group">
                <label htmlFor="date">Due date: </label>
                <input 
                type="date" 
                id="date" 
                value={this.state.date} 
                min={this.minDate} 
                max={maxDate} 
                onChange={this.handleDateChange}
                className="form-control" />
            </div>
                <button onClick={this.handleClick} type="submit" className="btn btn-primary">ADD</button>
                <hr />
            </div>
            </React.Fragment>
        );
    }
}
 
export default AddTask;