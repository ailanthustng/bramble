import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OverallTable from './OverallTable';
import RequestButton from "./RequestButton";


function App() {
  const [user, setUser] = useState(null);

  const [storedKeys, setKeys] = useState([]);

  useEffect(() => {
    axios.get('/api/keys/')
      .then(res => {
        setUser(res.headers["x-user-name"]);
        console.log(res.data);
        setKeys(res.data);
      });
  }, [user]);

  const addKey = incomingKey => {
    setKeys([...storedKeys, incomingKey]);
  }

  const removeKey = keyToBeDeleted => {
    setKeys(currentKeys => currentKeys.filter(key => key["api_key"] !== keyToBeDeleted));
  }

  return (
    <div className="background">
      <Jumbotron className="jumbo" fluid={true}>
        <Container fluid={true}>
          <Row>
            <Col xs={10}>
              <h1>Hello <u>{user}</u>!</h1>
            </Col>
            <Col xs={2}>
              <RequestButton className="reqButton" addKey={incomingKey => addKey(incomingKey)}/>
            </Col>
          </Row>
        </Container>
        <OverallTable
          storedKeys={storedKeys}
          user={user}
          removeKey={keyToBeDeleted => removeKey(keyToBeDeleted)}/>
      </Jumbotron>
    </div>
  );
}

export default App;
