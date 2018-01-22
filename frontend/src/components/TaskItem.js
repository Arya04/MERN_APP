import React, { Component } from 'react';

class TaskItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false
    };
  }
  renderActionSection(){
    if(this.state.isEditing){
      return (
        <td>
          <button onClick = {this.onSaveClick.bind(this)}>Save</button>
          <button onClick = {this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick = {this.onEditClick.bind(this)}>Edit</button>
        <button onClick = {this.props.deleteTask.bind(this, this.props.description)}>Delete</button>
      </td>
    );
  }
  renderTaskSection(){
    const {description, isDone} = this.props;
    const taskStyle = {
      color: isDone ? 'green' : 'red',
      cursor: 'pointer'
    };
    if(this.state.isEditing){
      return (
        <td>
          <form onSubmit = {this.onSaveClick.bind(this)}>
            <input type="text" defaultValue = {description} ref="editInput" />
          </form>
        </td>
      );
    }
    return (
      <td style={taskStyle}
          onClick = {this.props.toggleTask.bind(this, description)}
      >
        {description}
      </td>
    );
  }
  render() {
    return (
      <tr>
          {this.renderTaskSection()}
          {this.renderActionSection()}

      </tr>
    );
  }
  onEditClick(){
    this.setState({isEditing: true});
  }
  onCancelClick(){
    this.setState({isEditing: false});
  }
  onSaveClick(event){
    event.preventDefault();

    const oldTask = this.props.description;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask,newTask);
    this.setState({isEditing: false});

  }

}

export default TaskItem;
