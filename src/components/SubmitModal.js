import React, { Component } from 'react';
import Modal from 'react-modal';

const SubmitModal = (props) => (

    <Modal
        isOpen={!!props.showModal}
        onRequestClose={props.closeModal}
        contentLabel="Submit Modal"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="react-modal"
    >
        <h2 className="modal__title">{props.modalTitle}</h2>
        <p className="modal__body">{props.modalMessage}</p>
        <button
            onClick={props.closeModal}
            className="btn lg btn-main"
        >Close Modal</button>
    </Modal>
)


export default SubmitModal;