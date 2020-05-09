import React, {useState} from "react";

import Button from 'react-bootstrap/Button';

import RequestModal from "./RequestModal";

function RequestButton({addKey}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => {setModalShow(true)}}>
        Request Key
      </Button>

      <RequestModal
        show={modalShow}
        hideModal={() => setModalShow(false)}
        addKey={incomingKey => addKey(incomingKey)}
      />
    </div>
  );
}


export default RequestButton;