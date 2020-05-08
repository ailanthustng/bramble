import React from "react";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function RequestForm(props) {
    return(
      <Form>
          <Form.Group controlId="Application">
              <Form.Label>Application Name</Form.Label>
              <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </Form.Control>
              <Form.Text>Choose an application</Form.Text>
          </Form.Group>
          <Modal.Footer>
            <Button>Submit</Button>
            <Button onClick={props.onClick}>Close</Button>
          </Modal.Footer>
      </Form>
    );
}

export default RequestForm;