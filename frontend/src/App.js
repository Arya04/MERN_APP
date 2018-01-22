import React, { Component } from 'react';
import Tasks from './components/Tasks';
import CreateTask from './components/CreateTask';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList : []
    }
  }
  render() {
    return (
      <div>
        <h1 className = "App">React ToDo App</h1>
        <br />
        <hr />
        <div>
          <CreateTask />
          <Tasks />
        </div>

      </div>
    );
  }
}

export default App;
