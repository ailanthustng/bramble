import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
                <h4>request form goes here</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RequestModal;