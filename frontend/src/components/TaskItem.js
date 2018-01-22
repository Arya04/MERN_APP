import React, { Component } from 'react';

class TaskItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false
    };
  }
  renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }
  render() {
    return (
      <tr>
          {this.renderTaskSection()}
          {this.renderActionsSection()}
      </tr>
    );
  }
}

export default TaskItem;
