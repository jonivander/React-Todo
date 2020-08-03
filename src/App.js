import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

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


  checkTask= (itemId) => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if(item.id === itemId){
          return{
            ...item, 
            completed: !item.completed
          }
        }
        return item
      })
    });
  }; 

  clearCompleted = e => {
    e.preventDefault();
    this.setState({ tasks: this.state.tasks.filter
    (task => !task.completed)});
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2 onClick={() => this.setState({})}>Welcome to your To Do App!</h2>
          <TodoForm addItem={this.addItem} /> 
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
