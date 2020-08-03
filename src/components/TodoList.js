import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'; 

import Item from './Todo'; 

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.tasks.map(item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem} /> 
            ))}
        <Button color='info' className='btn' onClick={props.clearCompleted}>
                Clear Completed Items
            </Button>
        </div>
    );
};

export default TodoList; 