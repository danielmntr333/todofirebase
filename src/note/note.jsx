import React, { Component } from "react";
import "./note.css";
import PropTypes from "prop-types";

class Note extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
  }

  handleRemoveNote = id => {
    this.props.removeNote(id);
  };

  render() {
    return (
      <div className="note fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemoveNote(this.props.noteId)}
        >
          &times;
        </span>

        <p className="noteContent"> {this.noteContent} </p>
      </div>
    );
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
};

export default Note;
