import React, { Component } from 'react';

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
            <div className='form'>
                <input 
                type="text" 
                placeholder="Add task.." 
                value={this.state.text} 
                onChange={this.handleTextChange} />
                <input 
                type="checkbox" 
                checked={this.state.checked} 
                id="important" 
                onChange={this.handleCheckboxChange} /> 
                <label htmlFor="important">Priority</label>
                <br />
                <label htmlFor="date">Due date: </label>
                <input 
                type="date" 
                id="date" 
                value={this.state.date} 
                min={this.minDate} 
                max={maxDate} 
                onChange={this.handleDateChange} />
                <br />
                <button onClick={this.handleClick}>ADD</button>
                <hr />
            </div>
        );
    }
}
 
export default AddTask;