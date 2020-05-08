import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import RequestModal from "./RequestModal";

function RequestButton() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Request Key
            </Button>

            <RequestModal
                show={modalShow}
                onClose={() => setModalShow(false)}
            />
        </div>
    );
}


export default RequestButton;