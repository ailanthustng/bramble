import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import {CopyToClipboard} from "react-copy-to-clipboard/";


function CopyButton({api_key}) {
  const [copyStatus, setCopyStatus] = useState(false);

  const handleCopy = () => {
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false)
    }, 1500);
  }

  return (
    <CopyToClipboard
      text={api_key}
    >
      {copyStatus
        ? <Button variant="info">Copied!</Button>
        : <Button variant="info" onClick={handleCopy}>Copy</Button>
      }
    </CopyToClipboard>
  );
}

export default CopyButton;