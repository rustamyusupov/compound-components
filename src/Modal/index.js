import React, { PureComponent } from "react";
import Header from "./Header";
import Content from "./Content";
import Button from "./Button";

const { Provider, Consumer } = React.createContext();

class Modal extends PureComponent {
  static Header = Header;
  static Content = Content;
  static Button = Button(Consumer);

  render() {
    const { isOpen, onClose } = this.props;
    const className = isOpen ? "Modal Modal-show" : "Modal";

    return (
      <div className={className}>
        <Provider value={{ onClick: onClose }}>{this.props.children}</Provider>
      </div>
    );
  }
}

export default Modal;
