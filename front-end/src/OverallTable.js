import React from "react";

import Table from 'react-bootstrap/Table';

import TableEntry from './TableEntry';

function OverallTable() {
    return(
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>App</th>
                <th>API Key</th>
                <th>Date Created</th>
                <th>Time to Live</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <TableEntry
                    index="1"
                    appname="test app"
                    api="fake api key"
                />
            </tbody>
        </Table>
    );
}

export default OverallTable;