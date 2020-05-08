import React from "react";

import Modal from "react-bootstrap/Modal";

import RequestForm from "./RequestForm";

function RequestModal(props) {
    return(
        <Modal
            {...props}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Request API Key
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RequestForm onClick={props.onHide}/>
            </Modal.Body>
        </Modal>
    );
}

export default RequestModal;