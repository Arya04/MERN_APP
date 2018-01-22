import React, { Component } from 'react';
import TaskItem from './TaskItem';
import TodosListHeader from './Todo-list-header';

class Tasks extends Component {

  renderItems(){

  }
  render() {
    return (
      <table>
        <TodosListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
      </table>
    );
  }
}

export default Tasks;
