import React, { Component } from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (

    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeModal}
        contentLabel="Alert Modal"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="react-modal"
    >
        <h2 className="modal__title">Alert Modal</h2>
        <p className="modal__body">This is a React Modal</p>
        <h2>{props.selectedOption}</h2>
        <button
            onClick={props.closeModal}
            className="btn lg"
        >Close Modal</button>
    </Modal>
)


export default OptionModal;