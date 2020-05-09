import React from 'react';
import axios from "axios";

import Button from 'react-bootstrap/Button';

function DeleteButton({user, api_key, removeKey}) {
  const deleteKey = () => {
    axios.delete('/api/keys/', {
      params: {
        user,
        api_key
      }
    })
    removeKey(api_key);
  }

  return(
    <Button variant="danger" onClick={deleteKey}>Delete</Button>
  );
}

export default DeleteButton;