import React from 'react';
import ReactDOM from 'react-dom';
import ToDoComponent from './components/to-do-component';

const MyComponent = function() {
    return <div>
        <h1>Hello Wonderful world!</h1>
        <br/>
        <ToDoComponent name='Vaibhav'/>   
    </div>
    
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('root'));

