import React from 'react';

class ToDoComponent extends React.Component {
    render() {
        return (
            <div>
            <span>{this.props.name} this is your to do list</span>
            <ul id="list">
                <li>Groceries</li>
                <li>Bills</li>
                <li>childcare</li>
                <li>Doctor visit</li>
            </ul>
            <br/>
            <p>Click here to add another task</p>
            <input type="text"></input>               
            <button id="btn" onClick={this.addToList()}>Add</button>
        </div>
        )
    }

    addToList(){
        console.log('Added to list');        
    }

}

export default ToDoComponent;