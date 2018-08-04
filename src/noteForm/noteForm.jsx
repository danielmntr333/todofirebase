import React, { Component } from "react";
import "./noteForm.css";

class NodeForm extends Component {
  state = {
    newNoteContent: ""
  };

  handleUserInput = e => {
    this.setState({
      newNoteContent: e.target.value
    });
    console.log(this.state);
  };

  writeNote = () => {
    this.props.addNote(this.state.newNoteContent);
    this.setState({
      newNoteContent: ""
    });
  };

  render() {
    return (
      <div>
        <input
          className="noteInput"
          placeholder="Write a new note..."
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />
        <button className="noteButton" onClick={this.writeNote}>
          Add Note
        </button>
      </div>
    );
  }
}

export default NodeForm;
