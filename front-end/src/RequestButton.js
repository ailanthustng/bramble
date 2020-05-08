import React, {useState} from "react";

import Button from 'react-bootstrap/Button';

import RequestModal from "./RequestModal";

function RequestButton({setData}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => {setModalShow(true)}}>
        Request Key
      </Button>

      <RequestModal
        show={modalShow}
        hideModal={() => setModalShow(false)}
        setData={setData}
      />
    </div>
  );
}


export default RequestButton;