import React, { Component } from "react";
import "./App.css";
import Modal from "./Modal";

class App extends Component {
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  handleClose = () => {
    this.setState(({ isOpen }) => ({ isOpen: false }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="App">
        <button type="button" onClick={this.toggleModal}>
          Modal
        </button>

        <Modal isOpen={isOpen} onClose={this.handleClose}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Content>Content</Modal.Content>
          <Modal.Button>Close</Modal.Button>
        </Modal>
      </div>
    );
  }
}

export default App;
