import React, {useState} from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

function RequestForm(props) {
  const [app, setApp] = useState(null);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setApp(e.target.value);
  }

  function handleSubmit() {
    if (!app) {
      setShow(true);
    } else {
      setShow(false);
      let user = '27a53581-f09a-4a07-97a2-3454342f7ccb';

      axios.post('/api/keys/', null, {
        params: {
          user, app
        }
      })
        .then(res => {
          console.log(res.status);
          console.log(res.data);
        });
      props.onClick();
    }
  }

  return (
    <Form>
      <Form.Group controlId="Application">
        <Form.Label>Application Name</Form.Label>
        <Form.Control as="select" onChange={handleChange}>
          <option>Please choose an application.</option>
          <option value="foo">foo</option>
          <option value="bar">bar</option>
          <option value="baz">baz</option>
        </Form.Control>
        <Form.Text>Choose an application</Form.Text>
      </Form.Group>
      <Alert show={show} variant="danger" onClose={() => setShow(false)}>Please choose an application!</Alert>
      <Modal.Footer>
        <Button onClick={() => handleSubmit(props)}>Submit</Button>
        <Button onClick={props.onClick}>Close</Button>
      </Modal.Footer>
    </Form>
  );
}

export default RequestForm;
