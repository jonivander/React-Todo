import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const tasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasks,
    }
  }

  toggleItem = id => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id){
          return {
            ...item, 
            completed: !item.completed, 
          }
        }else{
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: new Date(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2 onClick={() => this.setState({})}>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} /> 
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
