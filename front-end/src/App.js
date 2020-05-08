import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import OverallTable from './OverallTable';
import RequestButton from "./RequestButton";

function App() {
    return(
        <div className="background">
            <Jumbotron className="jumbo" fluid={true}>
                <h1>Hello name-of-user!</h1>
                <RequestButton />
                <OverallTable />
            </Jumbotron>
        </div>
    );
}

export default App;
