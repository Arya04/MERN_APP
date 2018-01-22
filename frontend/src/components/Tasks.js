import React, { Component } from 'react';
import TaskItem from './TaskItem';
import TodosListHeader from './Todo-list-header';
import _ from 'lodash';

class Tasks extends Component {

  renderItems(){
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo,index) => <TaskItem key ={index}{...todo}{...props}/> );
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
