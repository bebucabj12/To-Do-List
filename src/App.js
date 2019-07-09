import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav.js';
import Form from './Components/Form.js';
import Cards from './Components/Todos';
// import EditInput from './Components/Editinput.js';

import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  //Agrega tarea
  handleAddTodo(todo) {
    this.setState({
      //spreat operation(...)
      todos: [...this.state.todos, todo]
    })
  }

  //Elimina carta de tarea 
  removeTodo(todo) {
    if(window.confirm('Are you sure you want to delete it?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== todo
        })
      })
    }
  }

  //cards de tareas
  render() {  
      let todos = this.state.todos.map((todo, i) => {        
      return (
        <Cards key={i}
          title={todo.title}
          priority={todo.priority}
          description={todo.description}
          responsible={todo.responsible}
          removeTodo={this.removeTodo.bind(this,i)}
        />
        // <EditInput
        //   inputEdit={todo}
        //   handleChange={this.handleChange}
        //   handleEdit={}
        // />
      )
  })

    return (
      <div className="App">
        <header className="App-header">
          <h2>Lista de tareas</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Nav length={todos.length} onAddTodo={this.handleAddTodo}/> 
        <div className="container">
          <div className="row">
            <Form onAddTodo={this.handleAddTodo}/>
            { todos }    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
