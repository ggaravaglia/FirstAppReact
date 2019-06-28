import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import FormTodo from './components/FormTodo';
import { isNoop, tsConstructorType } from '@babel/types';
import {todo} from './todo.json';

class App extends Component {

  constructor (){
    super();
    this.state = {
     todo   
    }
  }

  render () {
    const todos = this.state.todo.map((todo,i) => {
      return(
        <div className = "card">
          {todo.title}
        </div>
      )
    }
    )

  return (
  
    <div className="App">

      <Navigation/>
      <FormTodo/>      
      { todos }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          un cambio en la pc del trabajo para aplicacion en React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
