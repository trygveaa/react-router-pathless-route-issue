import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Modal.css';

const Modal = props => (
  <TransitionGroup>
    {props.isOpen &&
      <CSSTransition
        classNames="scale"
        timeout={800}
      >
        <div
          className="modal"
        >
          <div className="overlay" />
          <div className="content">
            {props.children}
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
      </CSSTransition>
    }
  </TransitionGroup>
);

export default Modal;
