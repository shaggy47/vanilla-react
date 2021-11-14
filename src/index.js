import React from 'react';
import ReactDOM from 'react-dom';
import ToDoComponent from './components/to-do-component';

const MyComponent = function() {
    return <h1>Hello Wonderful world!
        <br/>
        <ToDoComponent />   
    </h1>
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('root'));

