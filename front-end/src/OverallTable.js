import React, {useEffect, useState} from "react";

import Table from 'react-bootstrap/Table';

import TableEntry from './TableEntry';
import axios from "axios";

function OverallTable({storedKeys, user, removeKey}) {

  return (
    <Table striped bordered hover variant="dark">
      <thead>
      <tr>
        <th>#</th>
        <th>App</th>
        <th>API Key</th>
        <th>Date Created</th>
        <th>Time to Live</th>
        <th>Copy</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {storedKeys.map((currKeyEntry, index) => {
        return (
          <TableEntry
            key={index}
            index={index + 1}
            currentKeyEntry={currKeyEntry}
            user={user}
            removeKey={keyToBeDeleted => removeKey(keyToBeDeleted)}
          />
        )
      })}
      </tbody>
    </Table>
  );
}

export default OverallTable;