import React, { Component } from 'react';

class CreateTask extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: null
    };

  }
  renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
  }

  handleCreate(){
    
  }
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do?" ref="createInput" />
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }
}

export default CreateTask;
