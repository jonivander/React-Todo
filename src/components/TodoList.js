import React from 'react';

import Item from './Todo'; 

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.tasks.map(item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem} /> 
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Completed Items
            </button>
        </div>
    );
};

export default TodoList; 