import React from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function RequestForm(props) {

    return (
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
                <Button onClick={handleSubmit()}>Submit</Button>
                <Button onClick={props.onClick}>Close</Button>
            </Modal.Footer>
        </Form>
    );
}

function handleSubmit() {
    console.log("test");
    axios.get('/api/keys/?user=27a53581-f09a-4a07-97a2-3454342f7ccb')
        .then(res => {
            console.log(res.data);
        });
}

export default RequestForm;
