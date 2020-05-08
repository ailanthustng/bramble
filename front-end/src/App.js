import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OverallTable from './OverallTable';
import RequestButton from "./RequestButton";


function App() {
    return (
        <div className="background">
            <Jumbotron className="jumbo" fluid={true}>
                <Container className="contain" fluid>
                    <Row>
                        <Col sm={11}>
                            <h1>Hello name-of-user!</h1>
                        </Col>
                        <Col className="reqbutton" sm={1}>
                            <RequestButton/>
                        </Col>
                    </Row>
                </Container>
                <OverallTable/>
            </Jumbotron>
        </div>
    );
}

export default App;
