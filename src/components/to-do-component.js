import React from 'react';

class ToDoComponent extends React.Component {
    constructor() {
        super();
        this.addToList = this.addToList.bind(this);
        this.state = { listItems: ['Abc', 'DEF'] };
    }

    render() {
        const list = []; 
        this.state.listItems.map((item,index)=>{
            list.push(<li key={index}>{item}</li>);
        });
        
        console.log(list);
        return (
            <div>
                <span>{this.props.name} this is your to do list</span>
                <ul>
                    {list}
                </ul>
                <br />
                <p>Click here to add another task</p>
                <input type="text" id="todoItem"></input>
                <button id="btn" onClick={this.addToList}>Add</button>
            </div>
        )
    }

    addToList(e) {
        const list = this.state.listItems;
        const todoItem = document.getElementById('todoItem');
        list.push(todoItem.value);
        this.setState({ listItems: list });
    }

}

export default ToDoComponent;