import React, { Component } from 'react';
import Tasks from './components/Tasks';
import CreateTask from './components/CreateTask';
import './App.css';
import axios from 'axios';
import _ from 'lodash';


const todos = [
{
  description: "make react app",
  cuid: "1",
  isDone: false
},
{
  description: "make dinner",
  cuid: "2",
  isDone: true
}
];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos
    }
  }
  render() {
    return (
      <div>
        <h1 className = "App">React ToDo App</h1>
        <br />
        <hr />
        <div>
          <CreateTask todos= {this.state.todos} createTask = {this.createTask.bind(this)}/>
          <Tasks
            todos= {this.state.todos}
            toggleTask = {this.toggleTask.bind(this)}
            saveTask = {this.saveTask.bind(this)}
            deleteTask = {this.deleteTask.bind(this)}
          />
        </div>

      </div>
    );
  }
  createTask(task){
    this.state.todos.push({
      description: task,
      isDone: false
    });
    this.setState({ todos: this.state.todos });
  }
  toggleTask(description){
    const foundTodo = _.find(this.state.todos, todo => todo.description === description);
    foundTodo.isDone = !foundTodo.isDone;
    this.setState({todos: this.state.todos});
  }

  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.description === oldTask);

    foundTodo.description = newTask;
    this.setState({todos: this.state.todos});
  }
  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo => todo.description === taskToDelete);
    this.setState({todos: this.state.todos});
  }






}

export default App;
