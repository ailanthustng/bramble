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
  let user = '27a53581-f09a-4a07-97a2-3454342f7ccb';

  const [storedKeys, setKeys] = useState([]);

  useEffect(() => {
    axios.get('/api/keys/', {params: {user}})
      .then(res => {
        setKeys(res.data);
        console.log(res.data);
      });
  }, []);

  const addKey = incomingKey => {
    setKeys([...storedKeys, incomingKey]);
  }

  const removeKey = keyToBeDeleted => {
    setKeys(currentKeys => currentKeys.filter(key => key["api_key"] !== keyToBeDeleted));
  }

  return (
    <div className="background">
      <Jumbotron className="jumbo" fluid={true}>
        <Container className="contain" fluid>
          <Row>
            <Col sm={11}>
              <h1>Hello name-of-user!</h1>
            </Col>
            <Col className="reqbutton" sm={1}>
              <RequestButton addKey={incomingKey => addKey(incomingKey)}/>
            </Col>
          </Row>
        </Container>
        <OverallTable storedKeys={storedKeys} user={user} removeKey={keyToBeDeleted => removeKey(keyToBeDeleted)}/>
      </Jumbotron>
    </div>
  );
}

export default App;
