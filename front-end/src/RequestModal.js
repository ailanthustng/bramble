import React from "react";

import Modal from "react-bootstrap/Modal";

import RequestForm from "./RequestForm";

function RequestModal({addKey, hideModal, show}) {
  return (
    <Modal
      show={show}
      onHide={hideModal}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Request API Key
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RequestForm hideModal={hideModal} addKey={incomingKey => addKey(incomingKey)}/>
      </Modal.Body>
    </Modal>
  );
}

export default RequestModal;