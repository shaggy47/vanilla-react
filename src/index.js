import React from 'react';
import ReactDOM from 'react-dom';
import ToDoComponent from './components/to-do-component';
import TextAreacomponent from './components/text-area-component';
import TableComponent from './components/table-component';

const MyComponent = function () {
    const headers =['Title', 'Author', 'Language', 'Published', 'Sales'];
    const data=[
        {
            title:'A Tale of Two cities',
            author: 'Charles Dickens',
            language: 'English',
            published: '1897',
            sales: '200 M'
        },
        {
            title:'Nightingale',
            author: 'Charles Dickens',
            language: 'English',
            published: '1898',
            sales: '1M'
        },
        {
            title:'1984',
            author: 'Arthur Dickens',
            language: 'English',
            published: '1900',
            sales: '1M'
        },
        {
            title:'Murder on the orient express',
            author: 'Angus Dickens',
            language: 'English',
            published: '1897',
            sales: '1M'
        },{
            title:'Zion road',
            author: 'Titus Dickens',
            language: 'English',
            published: '1901',
            sales: '1M'
        }
    ]
    return (
        <div>
        <h1>Hello Wonderful world!</h1>
        <br />
        <ToDoComponent name='Vaibhav' />
        <br />
        <TextAreacomponent text="Vaibhav" />
        <br />
        <TableComponent headers={headers} initialData={data}/>
        </div>
    )
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('root'));
